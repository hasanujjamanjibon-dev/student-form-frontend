import { useLocation, useSearchParams } from "react-router-dom";
import usePreventActions from "../components/usePreventActions";
import { useEffect, useState } from "react";
import PrintingButton from "../components/PrintingButton";
import { Atom } from "react-loading-indicators";

export default function PrintPreview() {
  const location = useLocation();
  usePreventActions();
  const [searchParams] = useSearchParams();
  const [data, setData] = useState(null);

  const baseURL = import.meta.env.VITE_baseURL;
  useEffect(() => {
    const id = searchParams.get('id');

    if (location.state?.submittedData) {
      setData(location.state?.submittedData);
    } else if (id) {
      fetch(`${baseURL}/api/data/${id}`) // Backend থেকে নির্দিষ্ট Row fetch করবে
        .then((res) => res.json())
        .then((res) => setData(res.data));
    }
  }, [searchParams, location?.state]);

  if (!data) {
    return (
      <div className='h-screen flex justify-center items-center text-center'>
        <Atom
          color='#46010e'
          size='medium'
          text='Sakurazaka Japanese Language  & Cultural Center'
          textColor='#660000'
        />
      </div>
    );
  }

  const {
    studentName,
    studentMobile,
    fatherName,
    fatherMobile,
    motherName,
    motherMobile,
    dob,
    presentAddress,
    permanentAddress,
    sponsorName,
    sponsorFatherName,
    sponsorMotherName,

    sponsorPermanentAddress,
    businessName,
    businessType,
    businessAddress,
    officeNumber,
    studentAnotherNumber,
    fatherNameFamily,
    fatherDOB,
    fatherOccupation,
    motherNameFamily,
    motherDOB,
    motherOccupation,
    siblingName,
    siblingDOB,
    siblingOccupation,
    PrimarySchoolName,
    PrimarySchoolAddress,

    PrimaryGraduationYear,
    SSCSchoolName,
    SSCSchoolAddress,

    SSCGraduationYear,
    HSC_DiplomaSchoolName,
    HSC_DiplomaSchoolAddress,

    HSC_DiplomaGraduationYear,
    HonorsSchoolName,
    HonorsSchoolAddress,

    HonorsGraduationYear,
    MastersSchoolName,
    MastersSchoolAddress,

    MastersGraduationYear,
    currentCollegeUniversityName,
    currentSubject,
    currentRollNo,
    currentRegistrationNo,
    currentAcademicYear,

    currentCollegeUniversityAddress,
    JLPTScore,
    JLPTExamDate,
    JLPTResultPublishDate,
    JLPTExpectedExamDate,
    NATScore,
    NATExamDate,
    NATResultPublishDate,
    NATExpectedExamDate,
    JLCTScore,
    JLCTExamDate,
    JLCTResultPublishDate,
    JLCTExpectedExamDate,
    J_TestScore,
    J_TestExamDate,
    J_TestResultPublishDate,
    J_TestExpectedExamDate,
    Top_JScore,
    Top_JExamDate,
    Top_JResultPublishDate,
    Top_JExpectedExamDate,
  } = data || {};

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6 ">
      <div id="body" className="max-w-5xl mx-auto bg-white py-2  text-sm md:text-base px-8">
        {/* File Header */}
        <div id="file_title" className="border-b-2 border-black  mb-4  text-center font-bold text-xl">
          FILE NO..................
        </div>
        <form action="POST">
          {/* Student Info */}
          <section className="border-2 border-black overflow-x-auto">
            <div className="bg-[#e0e0e0] text-center font-bold border-b-2  border-black p-1 text-xs md:text-xl">
              STUDENT'S INFORMATION FOR DOCUMENT
            </div>
            <table className="w-full border-collapse border-2 border-[#b3b2b2]  table-auto md:table-fixed">
              <tbody>

                <tr className="border-b-2 border-[#b3b2b2]">
                  <td className="p-1 border-r-2 font-bold bg-[#F2F2F2] border-[#b3b2b2]">Student's Name:</td>
                  <td className="p-1"><input defaultValue={studentName} className="w-full  rounded px-2 outline-none" /></td>
                  <td className="p-1 border-x-2 font-bold bg-[#F2F2F2] text-center border-[#b3b2b2]">Mobile:</td>
                  <td className="p-1"><input defaultValue={studentMobile} className="w-full  rounded px-2 outline-none" /></td>
                </tr>
                <tr className="border-b-2 border-[#b3b2b2]">
                  <td className="p-1 border-r-2 font-bold bg-[#F2F2F2] border-[#b3b2b2]" >Father's Name:</td>
                  <td className="p-1"><input defaultValue={fatherName} className="w-full  rounded px-2 outline-none" /></td>
                  <td className="p-1 border-x-2 font-bold bg-[#F2F2F2] text-center border-[#b3b2b2]">Mobile:</td>
                  <td className="p-1"><input defaultValue={fatherMobile} className="w-full  rounded px-2 outline-none" /></td>
                </tr>
                <tr className="border-b-2 border-[#b3b2b2]">
                  <td className="p-1 border-r-2 font-bold bg-[#F2F2F2] border-[#b3b2b2]">Mother's Name:</td>
                  <td className="p-1"><input defaultValue={motherName} className="w-full  rounded px-2 outline-none" /></td>
                  <td className="p-1 border-x-2 font-bold bg-[#F2F2F2] text-center border-[#b3b2b2]">Mobile:</td>
                  <td className="p-1"><input defaultValue={motherMobile} className="w-full  rounded px-2 outline-none" /></td>
                </tr>
                <tr className="border-b-2 border-[#b3b2b2]">
                  <td className="p-1 border-r-2 font-bold bg-[#F2F2F2] border-[#b3b2b2]">Date of Birth (dd/mm/yyyy) :</td>
                  <td className="p-1" colSpan="3"><input defaultValue={dob} type="text" className="w-full  rounded px-2 outline-none" /></td>
                </tr>
                <tr className="border-b-2 border-[#b3b2b2]">
                  <td className="p-1 border-r-2 font-bold bg-[#F2F2F2] border-[#b3b2b2]">Present Address:</td>
                  <td className="p-1" colSpan="3"><textarea defaultValue={presentAddress} className="w-full  rounded px-2 outline-none resize-none" /></td>
                </tr>
                <tr>
                  <td className="p-1 border-r-2 font-bold bg-[#F2F2F2] border-[#b3b2b2]">Permanent Address:</td>
                  <td className="p-1" colSpan="3"><textarea defaultValue={permanentAddress} className="w-full  rounded px-2 outline-none resize-none" /></td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Guarantor Info */}
          <section className="border-2 border-black overflow-x-auto my-8">
            <div className="bg-[#e0e0e0] text-center font-bold border-b-2  border-black p-1 text-xs md:text-xl">
              GUARANTOR'S INFORMATION
            </div>
            <table className="w-full border-collapse border-2 border-[#b3b2b2] table-auto md:table-fixed">
              <tbody>
                <tr className="border-b-2 border-[#b3b2b2]">
                  <td className="p-1 border-r-2 border-[#b3b2b2] font-bold w-1/4 bg-[#F2F2F2]">Sponsor's Name:</td>
                  <td className="p-1" colSpan="3"><input defaultValue={sponsorName} className="w-full  rounded px-2 outline-none" /></td>
                </tr>
                <tr className="border-b-2 border-[#b3b2b2]">
                  <td className="p-1 border-r-2 border-[#b3b2b2] font-bold  bg-[#F2F2F2]">Sponsor's Father's Name:</td>
                  <td className="p-1" colSpan="3"><input defaultValue={sponsorFatherName} className="w-full  rounded px-2 outline-none" /></td>
                </tr>
                <tr className="border-b-2 border-[#b3b2b2]">
                  <td className="p-1 border-r-2 border-[#b3b2b2] font-bold  bg-[#F2F2F2]">Sponsor's Mother's Name:</td>
                  <td className="p-1" colSpan="3"><input defaultValue={sponsorMotherName} className="w-full  rounded px-2 outline-none" /></td>
                </tr>
                <tr className="border-b-2 border-[#b3b2b2]">
                  <td className="p-1 border-r-2 border-[#b3b2b2] font-bold  bg-[#F2F2F2]">Permanent Address:</td>
                  <td className="p-1" colSpan="3"><textarea defaultValue={sponsorPermanentAddress} className="w-full  rounded px-2 outline-none resize-none" /></td>
                </tr>
                <tr className="border-b-2 border-[#b3b2b2]">
                  <td className="p-1 border-r-2 border-[#b3b2b2] font-bold  bg-[#F2F2F2]">Business/Company Name:</td>
                  <td className="p-1"><input defaultValue={businessName} className="w-full  rounded px-2 outline-none" /></td>
                  <td className="p-1 border-x-2 border-[#b3b2b2] font-bold  text-center bg-[#F2F2F2]">Type of Business:</td>
                  <td className="p-1"><input defaultValue={businessType} className="w-full  rounded px-2 outline-none" /></td>
                </tr>
                <tr className="border-b-2 border-[#b3b2b2]">
                  <td className="p-1 border-r-2 border-[#b3b2b2] font-bold  bg-[#F2F2F2]">Business Address:</td>
                  <td className="p-1" colSpan="3"><textarea defaultValue={businessAddress} className="w-full  rounded px-2 outline-none resize-none" /></td>
                </tr>
                <tr>
                  <td className="p-1 border-r-2 border-[#b3b2b2] font-bold  bg-[#F2F2F2]">Office Number:</td>
                  <td className="p-1"><input defaultValue={officeNumber} className="w-full  rounded px-2 outline-none" /></td>
                  <td className="p-1 border-x-2 border-[#b3b2b2] font-bold text-center   bg-[#F2F2F2]">Student Another Number:</td>
                  <td className="p-1"><input defaultValue={studentAnotherNumber} className="w-full  rounded px-2 outline-none" /></td>
                </tr>
              </tbody>
            </table>
          </section>
          {/* Relation Information */}
          <section className="max-w-5xl mx-auto overflow-x-auto  bg-white">
            <div className="overflow-x-auto">
              <table className="w-full border border-black border-collapse text-sm md:text-base text-center table-auto md:table-fixed">
                <thead >
                  <tr className="bg-[#e0e0e0] border border-black">
                    <th className="border border-black p-1">Name</th>
                    <th className="border border-black p-1">Relation</th>
                    <th className="border border-black p-1">Date of Birth</th>
                    <th className="border border-black p-1">Occupation</th>
                  </tr>
                </thead>
                <tbody className="border-black border">
                  <tr>
                    <td className="border border-black p-1"><input defaultValue={fatherNameFamily} className="w-full  rounded px-2 outline-none" /></td>
                    <td className="border border-black p-1">Father</td>
                    <td className="border border-black p-1"><input defaultValue={fatherDOB} className="w-full  rounded px-2 outline-none" /></td>
                    <td className="border border-black p-1"><input defaultValue={fatherOccupation} className="w-full  rounded px-2 outline-none" /></td>
                  </tr>
                  <tr>
                    <td className="border border-black p-1"><input defaultValue={motherNameFamily} className="w-full  rounded px-2 outline-none" /></td>
                    <td className="border border-black p-1">Mother</td>
                    <td className="border border-black p-1"><input defaultValue={motherDOB} className="w-full  rounded px-2 outline-none" /></td>
                    <td className="border border-black p-1"><input defaultValue={motherOccupation} className="w-full  rounded px-2 outline-none" /></td>
                  </tr>
                  <tr>
                    <td className="border border-black p-1"><input defaultValue={siblingName} className="w-full  rounded px-2 outline-none" /></td>
                    <td className="border border-black p-1">Brother/Sister</td>

                    <td className="border border-black p-1"><input defaultValue={siblingDOB} className="w-full  rounded px-2 outline-none" /></td>
                    <td className="border border-black p-1"><input defaultValue={siblingOccupation} className="w-full  rounded px-2 outline-none" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          {/* Guarantor Info */}
          <section className="border-2 border-black overflow-x-auto my-8">
            <div className="bg-[#e0e0e0] text-center font-bold border-b-2  border-black p-1 text-xs md:text-xl">
              Educational Record
            </div>
            <table className="w-full border-collapse border-2 border-[#b3b2b2] table-auto md:table-fixed">
              <thead >
                <tr className="bg-[#e0e0e0] font-bold">
                  <th colSpan={1} className="border border-black p-1  ">Degree</th>
                  <th colSpan={2} className="border border-black p-1  ">Name of School</th>
                  <th colSpan={3} className="border border-black p-1  ">School Address</th>
                  <th className="border border-black p-1  ">Graduation Year</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={1} className="border border-black font-bold p-1 ">Primary School</td>
                  <td colSpan={2} className="border border-black p-1"><textarea defaultValue={PrimarySchoolName} className="w-full resize-none rounded px-2 outline-none" /></td>
                  <td colSpan={3} className="border border-black p-1"><textarea defaultValue={PrimarySchoolAddress} className="w-full resize-none rounded px-2 outline-none" /></td>
                  <td className="border border-black p-1"><input defaultValue={PrimaryGraduationYear} className="w-full  rounded px-2 outline-none" /></td>

                </tr>
                <tr>
                  <td colSpan={1} className="border border-black font-bold p-1 size-fit">S.S.C</td>
                  <td colSpan={2} className="border border-black p-1"><textarea defaultValue={SSCSchoolName} className="w-full resize-none rounded px-2 outline-none" /></td>
                  <td colSpan={3} className="border border-black p-1"><textarea defaultValue={SSCSchoolAddress} className="w-full resize-none rounded px-2 outline-none" /></td>
                  <td className="border border-black p-1"><input defaultValue={SSCGraduationYear} className="w-full  rounded px-2 outline-none" /></td>

                </tr>
                <tr>
                  <td colSpan={1} className="border border-black font-bold p-1 size-fit">H.S.C/Diploma</td>
                  <td colSpan={2} className="border border-black p-1"><textarea defaultValue={HSC_DiplomaSchoolName} className="w-full resize-none rounded px-2 outline-none" /></td>
                  <td colSpan={3} className="border border-black p-1"><textarea defaultValue={HSC_DiplomaSchoolAddress} className="w-full resize-none rounded px-2 outline-none" /></td>
                  <td className="border border-black p-1"><input defaultValue={HSC_DiplomaGraduationYear} className="w-full  rounded px-2 outline-none" /></td>

                </tr>
                <tr>
                  <td colSpan={1} className="border border-black font-bold p-1 size-fit">Honour's</td>
                  <td colSpan={2} className="border border-black p-1"><textarea defaultValue={HonorsSchoolName} className="w-full resize-none rounded px-2 outline-none" /></td>
                  <td colSpan={3} className="border border-black p-1"><textarea defaultValue={HonorsSchoolAddress} className="w-full resize-none rounded px-2 outline-none" /></td>
                  <td className="border border-black p-1"><input defaultValue={HonorsGraduationYear} className="w-full  rounded px-2 outline-none" /></td>
                </tr>
                <tr>
                  <td colSpan={1} className="border border-black font-bold p-1 size-fit">Master's</td>
                  <td colSpan={2} className="border border-black p-1"><textarea defaultValue={MastersSchoolName} className="w-full resize-none rounded px-2 outline-none" /></td>
                  <td colSpan={3} className="border border-black p-1"><textarea defaultValue={MastersSchoolAddress} className="w-full resize-none rounded px-2 outline-none" /></td>
                  <td className="border border-black p-1"><input defaultValue={MastersGraduationYear
                  } className="w-full  rounded px-2 outline-none" /></td>
                </tr>
              </tbody>
            </table>
          </section>
          {/* Student Running Academic Details */}
          <section className="border-2 border-black  my-8 overflow-x-auto">
            <div className="bg-[#e0e0e0] text-center font-bold border-b-2  w-full border-black p-1 text-xs md:text-xl">
              Student Running Academic Details
            </div>
            <table className="w-full border-collapse border-2 border-[#b3b2b2] table-auto md:table-fixed">
              <thead >
                <tr className="bg-[#e0e0e0]">
                  <th colSpan={2} className="border border-black p-1  ">College/University Name</th>
                  <th className="border border-black p-1  ">Subject</th>
                  <th className="border border-black p-1  ">Roll No.</th>
                  <th className="border border-black p-1  ">Reg. No.</th>
                  <th className="border border-black p-1  ">Year</th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td colSpan={2} className="border border-black p-1"><input defaultValue={currentCollegeUniversityName} className="w-full  rounded px-2 outline-none" /></td>
                  <td className="border border-black p-1"><input defaultValue={currentSubject} className="w-full  rounded px-2 outline-none" /></td>
                  <td className="border border-black p-1"><input defaultValue={currentRollNo} className="w-full  rounded px-2 outline-none" /></td>
                  <td className="border border-black p-1"><input defaultValue={currentRegistrationNo} className="w-full  rounded px-2 outline-none" /></td>
                  <td className="border border-black p-1"><input defaultValue={currentAcademicYear} className="w-full  rounded px-2 outline-none" /></td>
                </tr>
              </tbody>
              <thead >
                <tr className="bg-[#e0e0e0]">
                  <th colSpan={6} className="border text-left border-black p-1  px-2">College/University Full Address</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={6} className="border border-black p-1"><input defaultValue={currentCollegeUniversityAddress} className="w-full  rounded px-2 outline-none" /></td>
                </tr>
              </tbody>
            </table>
            {/* <table className="w-full border-collapse border-2 border-[#b3b2b2] table-auto md:table-fixed">
              <thead >
                <tr className="bg-[#e0e0e0]">
                  <th colSpan={6} className="border text-left border-black p-1  px-2">College/University Full Address</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={6} className="border border-black p-1"><input defaultValue={currentCollegeUniversityAddress} className="w-full  rounded px-2 outline-none" /></td>

                </tr>
              </tbody>
            </table> */}
          </section>
          {/*   Japanese Language Test &lang;N5/N4&rang; */}
          <section className="border-2 border-black  mt-8 overflow-x-auto">
            <div className="bg-[#e0e0e0] text-center font-bold border-b-2  border-black p-1 text-xs md:text-xl">
              Japanese Language Test &lang;N5/N4&rang;
            </div>
            <table className="w-full border-collapse border-2  border-[#b3b2b2] table-auto md:table-fixed " >
              <thead >
                <tr className="bg-[#e0e0e0] ">
                  <th colSpan={2} className="border border-black p-1  ">Test Name</th>
                  <th colSpan={2} className="border border-black p-1  ">Score</th>
                  <th colSpan={3} className="border border-black p-1  ">Exam Date	</th>
                  <th colSpan={3} className="border border-black p-1  ">Result Publish Date</th>
                  <th colSpan={3} className="border border-black p-1  ">Expected Exam Date</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td colSpan={2} className="border text-left border-black p-1 font-bold">JLPT</td>
                  <td colSpan={2} className="border  border-black p-1"><input defaultValue={JLPTScore} className="w-full  text-center rounded px-2 outline-none" /></td>
                  <td colSpan={3} className="border  border-black p-1"><input defaultValue={JLPTExamDate} className="w-full  rounded px-2 outline-none" /></td>
                  <td colSpan={3} className="border border-black p-1"><input defaultValue={JLPTResultPublishDate} className="w-full  rounded px-2 outline-none" /></td>
                  <td colSpan={3} className="border border-black p-1"><input defaultValue={JLPTExpectedExamDate} className="w-full  rounded px-2 outline-none" /></td>
                </tr>
                <tr>
                  <td colSpan={2} className="border text-left border-black p-1 font-bold">NAT</td>
                  <td colSpan={2} className="border border-black p-1"><input defaultValue={NATScore} className="w-full  rounded px-2  text-center outline-none" /></td>
                  <td colSpan={3} className="border border-black p-1"><input defaultValue={NATExamDate} className="w-full  rounded px-2 outline-none" /></td>
                  <td colSpan={3} className="border border-black p-1"><input defaultValue={NATResultPublishDate} className="w-full  rounded px-2 outline-none" /></td>
                  <td colSpan={3} className="border border-black p-1"><input defaultValue={NATExpectedExamDate} className="w-full  rounded px-2 outline-none" /></td>
                </tr>
                <tr>
                  <td colSpan={2} className="border text-left border-black p-1 font-bold">JLCT</td>
                  <td colSpan={2} className="border border-black p-1"><input defaultValue={JLCTScore} className="w-full  rounded px-2  text-center  outline-none" /></td>
                  <td colSpan={3} className="border border-black p-1"><input defaultValue={JLCTExamDate} className="w-full  rounded px-2 outline-none" /></td>
                  <td colSpan={3} className="border border-black p-1"><input defaultValue={JLCTResultPublishDate} className="w-full  rounded px-2 outline-none" /></td>
                  <td colSpan={3} className="border border-black p-1"><input defaultValue={JLCTExpectedExamDate} className="w-full  rounded px-2 outline-none" /></td>
                </tr>
                <tr>
                  <td colSpan={2} className="border text-left border-black p-1 font-bold">J. Test</td>
                  <td colSpan={2} className="border border-black p-1"><input defaultValue={J_TestScore} className="w-full  rounded px-2  text-center outline-none" /></td>
                  <td colSpan={3} className="border border-black p-1"><input defaultValue={J_TestExamDate} className="w-full  rounded px-2 outline-none" /></td>
                  <td colSpan={3} className="border border-black p-1"><input defaultValue={J_TestResultPublishDate} className="w-full  rounded px-2 outline-none" /></td>
                  <td colSpan={3} className="border border-black p-1"><input defaultValue={J_TestExpectedExamDate} className="w-full  rounded px-2 outline-none" /></td>
                </tr>
                <tr>
                  <td colSpan={2} className="border text-left border-black p-1 font-bold">Top J</td>
                  <td colSpan={2} className="border border-black p-1"><input defaultValue={Top_JScore} className="w-full  rounded px-2  text-center  outline-none" /></td>
                  <td colSpan={3} className="border border-black p-1"><input defaultValue={Top_JExamDate} className="w-full  rounded px-2 outline-none" /></td>
                  <td colSpan={3} className="border border-black p-1"><input defaultValue={Top_JResultPublishDate} className="w-full  rounded px-2 outline-none" /></td>
                  <td colSpan={3} className="border border-black p-1"><input defaultValue={Top_JExpectedExamDate} className="w-full  rounded px-2 outline-none" /></td>
                </tr>
              </tbody>
            </table>
          </section>
          {/* Submit Button */}
          <section className='text-center my-4'>
            <PrintingButton />
          </section>
        </form>

      </div >
    </div >


  );
}

