import { useRouter } from "next/router";
import React, { useState } from "react";
import { supabase } from "../../../../lib/supabase";
import InputCmp from "../../../../components/InputCmp";
import DashCmp from "../../../../components/DashCmp";
import Title from "../../../../components/Title";

const CreateTeacher = () => {
  const [name, setName] = useState("");
  const [special, setSpecial] = useState("");
  const [bio, setBio] = useState("");
  const [photo, setPhoto] = useState(null);

  const router = useRouter();

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const uploadPhoto = async () => {
    if (!photo) return; // Make sure a photo is selected
    const now = new Date()
    const stringDate = `${now}`
    const lowerTrim = stringDate.toLowerCase().replace(/\W/g, '')
    const { data, error } = await supabase.storage
      .from("teacher_photos")
      .upload(lowerTrim, photo);

    if (error) {
      console.error("Error uploading photo:", error.message);
      return;
    }
    if(data) {
      return data.fullPath
    }
  };

  const create = async () => {
    const photoUrl = await uploadPhoto();
    const remaining = "https://grocviikgcjxaxnkdvrv.supabase.co/storage/v1/object/public/"
    const fullURL = `${remaining}${photoUrl}`  

    const info = {
      name,
      specialty: special,
      bio,
      photo: fullURL,
    };

    try {
      let { data, error } = await supabase.from("teacher").insert(info);
      if (error) {
        throw error;
      }
      if (data) {
        router.reload();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Title text="زیادکردنی مامۆستا" />
      <DashCmp>
        <InputCmp
          label="ناو"
          placeholder="ناوی مامۆستا"
          state={name}
          setState={setName}
        />
        <InputCmp
          label="پسپۆڕیی"
          placeholder="پسپۆڕی مامۆستا"
          state={special}
          setState={setSpecial}
        />
        <InputCmp
          label="پرۆفایل"
          placeholder="پرۆفایلی مامۆستا"
          state={bio}
          setState={setBio}
        />
        <div className="mb-4">
          <label
            htmlFor="photo"
            className="block text-sm font-medium text-gray-700"
          >
            Photo
          </label>
          <input
            id="photo"
            name="photo"
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <button
          onClick={create}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Teacher
        </button>
      </DashCmp>
    </>
  );
};

export default CreateTeacher;
