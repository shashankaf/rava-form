import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { supabase } from "../../../../lib/supabase";
import InputCmp from "../../../../components/InputCmp";
import DashCmp from "../../../../components/DashCmp";
import Title from "../../../../components/Title";
import Image from "next/image";
import AuthLayout from "../../../../components/AuthLayout";

const EditTeacher = () => {
  const router = useRouter();
  const { id } = router.query;
  const [teacher, setTeacher] = useState(null);
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [bio, setBio] = useState("");
  const [photo, setPhoto] = useState("");

  const fetcher = async () => {
    try {
      const { data, error } = await supabase
        .from("teacher")
        .select()
        .eq("id", id)
        .single();
      if (error) throw Error;
      setTeacher(data);
      setName(data.name || "");
      setSpecialty(data.specialty || "");
      setBio(data.bio || "");
      setPhoto(data.photo || "");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetcher();
  }, [id]);

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const uploadPhoto = async () => {
    if (!photo) return; // Make sure a photo is selected
    const now = new Date();
    const stringDate = `${now}`;
    const lowerTrim = stringDate.toLowerCase().replace(/\W/g, "");
    const { data, error } = await supabase.storage
      .from("teacher_photos")
      .upload(lowerTrim, photo);

    if (error) {
      console.error("Error uploading photo:", error.message);
      return;
    }
    if (data) {
      return data.fullPath;
    }
  };

  const updateTeacher = async () => {
    const photoURL = await uploadPhoto();
    const remaining = "https://grocviikgcjxaxnkdvrv.supabase.co/storage/v1/object/public/"
    const fullURL = `${remaining}${photoURL}`  
    if (teacher.name.length < 2 || teacher.specialty.length < 2) {
      return;
    }
    try {
      const { data, error } = await supabase
        .from("teacher")
        .update({
          name,
          specialty,
          photo: fullURL,
          bio,
        })
        .eq("id", id);
      if (error) throw Error;
      console.log(data);
      router.reload();
    } catch (e) {
      console.log(e);
    }
  };

  if (teacher === null) {
    return <p>...</p>;
  }
  return (
    <AuthLayout>
      <DashCmp>
        <Title text="نوێکردنەوەی مامۆستا" />
        <InputCmp label="ناوی مامۆستا" state={name} setState={setName} />
        <InputCmp label="پسپۆڕیی" state={specialty} setState={setSpecialty} />
        <InputCmp label="پرۆفایل" state={bio} setState={setBio} />
        <div>
          <Image src={photo} width={100} height={100} alt={name} />
          <div className="mb-4">
            <label
              htmlFor="photo"
              className="block text-sm font-medium text-gray-700"
            >
              نوێکردنەوەی وێنە
            </label>
            <input
              id="photo"
              name="photo"
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            <button onClick={updateTeacher} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4">
              نوێکردنەوە
            </button>
          </div>
        </div>
      </DashCmp>
    </AuthLayout>
  );
};

export default EditTeacher;
