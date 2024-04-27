
import React, { useEffect, useState } from 'react';
import { Document, Page, View, Text, Image, StyleSheet, PDFViewer, Font } from '@react-pdf/renderer';


// Define styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: '15%',
    height: 'auto',
  },
  text: {
    fontSize: 20,
    marginVertical: 10,
    marginHorizontal: 'auto',
  },
  tableContainer: {
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    alignItems: 'center',
    paddingVertical: 5,
  },
  cell: {
    flexGrow: 1,
    padding: 5,
  },
  signatureContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  signature: {
    width: '40%',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: 5,
  },
});

// Data for the table
const tableData = [
  ['Row 1, Col 1', 'Row 1, Col 2', 'Row 1, Col 3'],
  ['Row 2, Col 1', 'Row 2, Col 2', 'Row 2, Col 3'],
  // Add more rows as needed
];

// Create the PDF component
const PDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <View style={styles.imageContainer}>
          <Image alt={"hello"} src="./krg.png" style={styles.image} />
          <Image alt={"goodbye"} src="./rava.png" style={styles.image} />
        </View>
        <Text style={styles.text}>حکومەتی هەرێمی کوردستان - وەزارەتی پەروەردە</Text>
        <Text style={styles.text}>Big Text Line 2</Text>
        <View style={styles.tableContainer}>
          {tableData.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((cell, cellIndex) => (
                <Text key={cellIndex} style={styles.cell}>
                  {cell}
                </Text>
              ))}
            </View>
          ))}
        </View>
        <Text style={styles.text}>Listed Instructions:</Text>
        <Text>- Instruction 1</Text>
        <Text>- Instruction 2</Text>
        {/* Add more instructions as needed */}
        <View style={styles.signatureContainer}>
          <Text style={styles.signature}>Signature (Left)</Text>
          <Text style={styles.signature}>Signature (Right)</Text>
        </View>
      </View>
    </Page>
  </Document>
);

const FormPDF = () => {
  const [client, setClient] = useState(false)
  useEffect(() => {
    setClient(true)
  }, [])
  return (
  <PDFViewer>
      <PDF />
  </PDFViewer>
  )
}

export default FormPDF

