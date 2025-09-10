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
    sponsorPresentAddress,
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
    PrimaryAdmissionYear,
    PrimaryGraduationYear,
    SSCSchoolName,
    SSCSchoolAddress,
    SSCAdmissionYear,
    SSCGraduationYear,
    HSC_DiplomaSchoolName,
    HSC_DiplomaSchoolAddress,
    HSC_DiplomaAdmissionYear,
    HSC_DiplomaGraduationYear,
    HonorsSchoolName,
    HonorsSchoolAddress,
    HonorsAdmissionYear,
    HonorsGraduationYear,
    MastersSchoolName,
    MastersSchoolAddress,
    MastersAdmissionYear,
    MastersGraduationYear,
    currentCollegeUniversityName,
    currentSubject,
    currentRollNo,
    currentRegistrationNo,
    currentAcademicYear,
    currentSession,
    currentStatus,
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
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 ">
      <div className="max-w-5xl mx-auto bg-white  text-sm md:text-base px-8 pb-8">
        {/* File Header */}
        <div className="border-b-2 border-black mb-4   p-4  text-center font-bold text-xl">
          FILE NO..................
        </div>
        <form action="POST">

          {/* Student Info */}
          <div className="border-2 border-black ">
            <div className="bg-[#e0e0e0] text-center font-bold border-b-2  border-black p-2 text-xs md:text-xl">
              STUDENT'S INFORMATION FOR DOCUMENT
            </div>
            <table className="w-full border-collapse border-2 border-[#b3b2b2] ">
              <tbody>

                <tr className="border-b-2 border-[#b3b2b2]">
                  <td className="p-2 border-r-2 font-bold bg-[#F2F2F2] border-[#b3b2b2]">Student's Name:</td>
                  <td className="p-2"><input defaultValue={studentName} className="w-full p-1 rounded outline-none" /></td>
                  <td className="p-2 border-x-2 font-bold bg-[#F2F2F2] text-center border-[#b3b2b2]">Mobile:</td>
                  <td className="p-2"><input defaultValue={studentMobile} className="w-full p-1 rounded outline-none" /></td>
                </tr>
                <tr className="border-b-2 border-[#b3b2b2]">
                  <td className="p-2 border-r-2 font-bold bg-[#F2F2F2] border-[#b3b2b2]" >Father's Name:</td>
                  <td className="p-2"><input defaultValue={fatherName} className="w-full p-1 rounded outline-none" /></td>
                  <td className="p-2 border-x-2 font-bold bg-[#F2F2F2] text-center border-[#b3b2b2]">Mobile:</td>
                  <td className="p-2"><input defaultValue={fatherMobile} className="w-full p-1 rounded outline-none" /></td>
                </tr>
                <tr className="border-b-2 border-[#b3b2b2]">
                  <td className="p-2 border-r-2 font-bold bg-[#F2F2F2] border-[#b3b2b2]">Mother's Name:</td>
                  <td className="p-2"><input defaultValue={motherName} className="w-full p-1 rounded outline-none" /></td>
                  <td className="p-2 border-x-2 font-bold bg-[#F2F2F2] text-center border-[#b3b2b2]">Mobile:</td>
                  <td className="p-2"><input defaultValue={motherMobile} className="w-full p-1 rounded outline-none" /></td>
                </tr>
                <tr className="border-b-2 border-[#b3b2b2]">
                  <td className="p-2 border-r-2 font-bold bg-[#F2F2F2] border-[#b3b2b2]">Date of Birth (dd/mm/yyyy) :</td>
                  <td className="p-2" colSpan="3"><input defaultValue={dob} type="text" className="w-full p-1 rounded outline-none" /></td>
                </tr>
                <tr className="border-b-2 border-[#b3b2b2]">
                  <td className="p-2 border-r-2 font-bold bg-[#F2F2F2] border-[#b3b2b2]">Present Address:</td>
                  <td className="p-2" colSpan="3"><input defaultValue={presentAddress} type="text" className="w-full p-1 rounded outline-none" /></td>
                </tr>
                <tr>
                  <td className="p-2 border-r-2 font-bold bg-[#F2F2F2] border-[#b3b2b2]">Permanent Address:</td>
                  <td className="p-2" colSpan="3"><input defaultValue={permanentAddress} type="text" className="w-full p-1 rounded outline-none" /></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Guarantor Info */}
          <div className="border-2 border-black  my-8">
            <div className="bg-[#e0e0e0] text-center font-bold border-b-2  border-black p-2 text-xs md:text-xl">
              GUARANTOR'S INFORMATION
            </div>
            <table className="w-full border-collapse border-2 border-[#b3b2b2]">
              <tbody>
                <tr className="border-b-2 border-[#b3b2b2]">
                  <td className="p-2 border-r-2 border-[#b3b2b2] font-bold w-1/4 bg-[#F2F2F2]">Sponsor's Name:</td>
                  <td className="p-2" colSpan="3"><input defaultValue={sponsorName} className="w-full p-1 rounded outline-none" /></td>
                </tr>
                <tr className="border-b-2 border-[#b3b2b2]">
                  <td className="p-2 border-r-2 border-[#b3b2b2] font-bold  bg-[#F2F2F2]">Sponsor's Father's Name:</td>
                  <td className="p-2" colSpan="3"><input defaultValue={sponsorFatherName} className="w-full p-1 rounded outline-none" /></td>
                </tr>
                <tr className="border-b-2 border-[#b3b2b2]">
                  <td className="p-2 border-r-2 border-[#b3b2b2] font-bold  bg-[#F2F2F2]">Sponsor's Mother's Name:</td>
                  <td className="p-2" colSpan="3"><input defaultValue={sponsorMotherName} className="w-full p-1 rounded outline-none" /></td>
                </tr>
                <tr className="border-b-2 border-[#b3b2b2]">
                  <td className="p-2 border-r-2 border-[#b3b2b2] font-bold  bg-[#F2F2F2]">Present Address:</td>
                  <td className="p-2" colSpan="3"><input defaultValue={sponsorPresentAddress} type="text" className="w-full p-1 rounded outline-none" /></td>
                </tr>
                <tr className="border-b-2 border-[#b3b2b2]">
                  <td className="p-2 border-r-2 border-[#b3b2b2] font-bold  bg-[#F2F2F2]">Permanent Address:</td>
                  <td className="p-2" colSpan="3"><input defaultValue={sponsorPermanentAddress} type="text" className="w-full p-1 rounded outline-none" /></td>
                </tr>
                <tr className="border-b-2 border-[#b3b2b2]">
                  <td className="p-2 border-r-2 border-[#b3b2b2] font-bold  bg-[#F2F2F2]">Business/Company Name:</td>
                  <td className="p-2"><input defaultValue={businessName} className="w-full p-1 rounded outline-none" /></td>
                  <td className="p-2 border-x-2 border-[#b3b2b2] font-bold  text-center bg-[#F2F2F2]">Type of Business:</td>
                  <td className="p-2"><input defaultValue={businessType} className="w-full p-1 rounded outline-none" /></td>
                </tr>
                <tr className="border-b-2 border-[#b3b2b2]">
                  <td className="p-2 border-r-2 border-[#b3b2b2] font-bold  bg-[#F2F2F2]">Business Address:</td>
                  <td className="p-2" colSpan="3"><input defaultValue={businessAddress} type="text" className="w-full p-1 rounded outline-none" /></td>
                </tr>
                <tr>
                  <td className="p-2 border-r-2 border-[#b3b2b2] font-bold  bg-[#F2F2F2]">Office Number:</td>
                  <td className="p-2"><input defaultValue={officeNumber} className="w-full p-1 rounded outline-none" /></td>
                  <td className="p-2 border-x-2 border-[#b3b2b2] font-bold text-center   bg-[#F2F2F2]">Student Another Number:</td>
                  <td className="p-2"><input defaultValue={studentAnotherNumber} className="w-full p-1 rounded outline-none" /></td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Relation Information */}
          <div className="max-w-5xl mx-auto  bg-white">
            <div className="overflow-x-auto">
              <table className="w-full border border-black border-collapse text-sm md:text-base text-center">
                <thead >
                  <tr className="bg-[#e0e0e0] border border-black">
                    <th className="border border-black p-2">Name</th>
                    <th className="border border-black p-2">Relation</th>
                    <th className="border border-black p-2">Date of Birth</th>
                    <th className="border border-black p-2">Occupation</th>
                  </tr>
                </thead>
                <tbody className="border-black border">
                  <tr>
                    <td className="border border-black p-2"><input defaultValue={fatherNameFamily} className="w-full p-1 rounded outline-none" /></td>
                    <td className="border border-black p-2">Father</td>
                    <td className="border border-black p-2"><input defaultValue={fatherDOB} className="w-full p-1 rounded outline-none" /></td>
                    <td className="border border-black p-2"><input defaultValue={fatherOccupation} className="w-full p-1 rounded outline-none" /></td>
                  </tr>
                  <tr>
                    <td className="border border-black p-2"><input defaultValue={motherNameFamily} className="w-full p-1 rounded outline-none" /></td>
                    <td className="border border-black p-2">Mother</td>
                    <td className="border border-black p-2"><input defaultValue={motherDOB} className="w-full p-1 rounded outline-none" /></td>
                    <td className="border border-black p-2"><input defaultValue={motherOccupation} className="w-full p-1 rounded outline-none" /></td>
                  </tr>
                  <tr>
                    <td className="border border-black p-2"><input defaultValue={siblingName} className="w-full p-1 rounded outline-none" /></td>
                    <td className="border border-black p-2">Brother/Sister</td>

                    <td className="border border-black p-2"><input defaultValue={siblingDOB} className="w-full p-1 rounded outline-none" /></td>
                    <td className="border border-black p-2"><input defaultValue={siblingOccupation} className="w-full p-1 rounded outline-none" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Guarantor Info */}
          <div className="border-2 border-black  my-8">
            <div className="bg-[#e0e0e0] text-center font-bold border-b-2  border-black p-2 text-xs md:text-xl">
              Educational Record
            </div>
            <table className="w-full border-collapse border-2 border-[#b3b2b2] table-auto md:table-fixed">
              <thead >
                <tr className="bg-[#e0e0e0] font-bold">
                  <th colSpan={1} className="border border-black    p-2 min-w-fit">Degree</th>
                  <th className="border border-black p-2   min-w-fit">Name of School</th>
                  <th className="border border-black p-2   min-w-fit">School Address</th>
                  <th className="border border-black p-2   min-w-fit">Admission Year</th>
                  <th className="border border-black p-2   min-w-fit">Graduation Year</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={1} className="border border-black font-bold p-2 size-fit">Primary School</td>
                  <td className="border border-black p-2"><input defaultValue={PrimarySchoolName} className="w-full p-1 rounded outline-none" /></td>
                  <td className="border border-black p-2"><input defaultValue={PrimarySchoolAddress} className="w-full p-1 rounded outline-none" /></td>
                  <td className="border border-black p-2"><input defaultValue={PrimaryAdmissionYear} className="w-full p-1 rounded outline-none" /></td>
                  <td className="border border-black p-2"><input defaultValue={PrimaryGraduationYear} className="w-full p-1 rounded outline-none" /></td>
                </tr>
                <tr>
                  <td colSpan={1} className="border border-black font-bold p-2 size-fit">S.S.C</td>
                  <td className="border border-black p-2"><input defaultValue={SSCSchoolName} className="w-full p-1 rounded outline-none" /></td>
                  <td className="border border-black p-2"><input defaultValue={SSCSchoolAddress} className="w-full p-1 rounded outline-none" /></td>
                  <td className="border border-black p-2"><input defaultValue={SSCAdmissionYear} className="w-full p-1 rounded outline-none" /></td>
                  <td className="border border-black p-2"><input defaultValue={SSCGraduationYear} className="w-full p-1 rounded outline-none" /></td>
                </tr>
                <tr>
                  <td colSpan={1} className="border border-black font-bold p-2 size-fit">H.S.C/Diploma</td>
                  <td className="border border-black p-2"><input defaultValue={HSC_DiplomaSchoolName} className="w-full p-1 rounded outline-none" /></td>
                  <td className="border border-black p-2"><input defaultValue={HSC_DiplomaSchoolAddress} className="w-full p-1 rounded outline-none" /></td>
                  <td className="border border-black p-2"><input defaultValue={HSC_DiplomaAdmissionYear} className="w-full p-1 rounded outline-none" /></td>
                  <td className="border border-black p-2"><input defaultValue={HSC_DiplomaGraduationYear} className="w-full p-1 rounded outline-none" /></td>
                </tr>
                <tr>
                  <td colSpan={1} className="border border-black font-bold p-2 size-fit">Honor's</td>
                  <td className="border border-black p-2"><input defaultValue={HonorsSchoolName} className="w-full p-1 rounded outline-none" /></td>
                  <td className="border border-black p-2"><input defaultValue={HonorsSchoolAddress} className="w-full p-1 rounded outline-none" /></td>
                  <td className="border border-black p-2"><input defaultValue={HonorsAdmissionYear} className="w-full p-1 rounded outline-none" /></td>
                  <td className="border border-black p-2"><input defaultValue={HonorsGraduationYear} className="w-full p-1 rounded outline-none" /></td>
                </tr>
                <tr>
                  <td colSpan={1} className="border border-black font-bold p-2 size-fit">Master's</td>
                  <td className="border border-black p-2"><input defaultValue={MastersSchoolName} className="w-full p-1 rounded outline-none" /></td>
                  <td className="border border-black p-2"><input defaultValue={MastersSchoolAddress} className="w-full p-1 rounded outline-none" /></td>
                  <td className="border border-black p-2"><input defaultValue={MastersAdmissionYear} className="w-full p-1 rounded outline-none" /></td>
                  <td className="border border-black p-2"><input defaultValue={MastersGraduationYear} className="w-full p-1 rounded outline-none" /></td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Student Running Academic Details */}
          <div className="border-2 border-black  my-8">
            <div className="bg-[#e0e0e0] text-center font-bold border-b-2  border-black p-2 text-xs md:text-xl">
              Student Running Academic Details
            </div>
            <table className="w-full border-collapse border-2 border-[#b3b2b2] table-auto md:table-fixed">
              <thead >
                <tr className="bg-[#e0e0e0]">
                  <th colSpan={2} className="border border-black p-2 min-w-fit">College/University Name</th>
                  <th className="border border-black p-2 min-w-fit">Subject</th>
                  <th className="border border-black p-2 min-w-fit">Roll No.</th>
                  <th className="border border-black p-2 min-w-fit">Reg. No.</th>
                  <th className="border border-black p-2 min-w-fit">Year</th>
                  <th className="border border-black p-2 min-w-fit">Session</th>
                  <th className="border border-black p-2 min-w-fit">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={2} className="border border-black p-2"><input defaultValue={currentCollegeUniversityName} className="w-full p-1 rounded outline-none" /></td>
                  <td className="border border-black p-2"><input defaultValue={currentSubject} className="w-full p-1 rounded outline-none" /></td>
                  <td className="border border-black p-2"><input defaultValue={currentRollNo} className="w-full p-1 rounded outline-none" /></td>
                  <td className="border border-black p-2"><input defaultValue={currentRegistrationNo} className="w-full p-1 rounded outline-none" /></td>
                  <td className="border border-black p-2"><input defaultValue={currentAcademicYear} className="w-full p-1 rounded outline-none" /></td>
                  <td className="border border-black p-2"><input defaultValue={currentSession} className="w-full p-1 rounded outline-none" /></td>
                  <td className="border border-black p-2">
                    <select id='status' defaultValue={currentStatus} className="w-full  rounded outline-none" >
                      <option defaultChecked>--Select--</option>
                      <option>Running</option>
                      <option>Completed</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Student Running Academic Details */}
          <div className="border-2 border-black  my-8">
            <div className="bg-[#e0e0e0] text-center font-bold border-b-2  border-black p-2 text-xs md:text-xl">
              Japanese Language Test &lang;N5/N4&rang;
            </div>
            <table className="w-full border-collapse border-2 border-[#b3b2b2] table-auto md:table-fixed">
              <thead >
                <tr className="bg-[#e0e0e0]">
                  <th colSpan={2} className="border border-black p-2 min-w-fit">Test Name</th>
                  <th colSpan={2} className="border border-black p-2 min-w-fit">Score</th>
                  <th colSpan={2} className="border border-black p-2 min-w-fit">Exam Date	</th>
                  <th colSpan={3} className="border border-black p-2 min-w-fit">Result Publish Date</th>
                  <th colSpan={3} className="border border-black p-2 min-w-fit">Expected Exam Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={2} className="border border-black p-2 font-bold">JLPT</td>
                  <td colSpan={2} className="border border-black p-2"><input defaultValue={JLPTScore} className="w-full p-1 rounded outline-none" /></td>
                  <td colSpan={2} className="border border-black p-2"><input defaultValue={JLPTExamDate} className="w-full p-1 rounded outline-none" /></td>
                  <td colSpan={3} className="border border-black p-2"><input defaultValue={JLPTResultPublishDate} className="w-full p-1 rounded outline-none" /></td>
                  <td colSpan={3} className="border border-black p-2"><input defaultValue={JLPTExpectedExamDate} className="w-full p-1 rounded outline-none" /></td>
                </tr>
                <tr>
                  <td colSpan={2} className="border border-black p-2 font-bold">NAT</td>
                  <td colSpan={2} className="border border-black p-2"><input defaultValue={NATScore} className="w-full p-1 rounded outline-none" /></td>
                  <td colSpan={2} className="border border-black p-2"><input defaultValue={NATExamDate} className="w-full p-1 rounded outline-none" /></td>
                  <td colSpan={3} className="border border-black p-2"><input defaultValue={NATResultPublishDate} className="w-full p-1 rounded outline-none" /></td>
                  <td colSpan={3} className="border border-black p-2"><input defaultValue={NATExpectedExamDate} className="w-full p-1 rounded outline-none" /></td>
                </tr>
                <tr>
                  <td colSpan={2} className="border border-black p-2 font-bold">JLCT</td>
                  <td colSpan={2} className="border border-black p-2"><input defaultValue={JLCTScore} className="w-full p-1 rounded outline-none" /></td>
                  <td colSpan={2} className="border border-black p-2"><input defaultValue={JLCTExamDate} className="w-full p-1 rounded outline-none" /></td>
                  <td colSpan={3} className="border border-black p-2"><input defaultValue={JLCTResultPublishDate} className="w-full p-1 rounded outline-none" /></td>
                  <td colSpan={3} className="border border-black p-2"><input defaultValue={JLCTExpectedExamDate} className="w-full p-1 rounded outline-none" /></td>
                </tr>
                <tr>
                  <td colSpan={2} className="border border-black p-2 font-bold">J. Test</td>
                  <td colSpan={2} className="border border-black p-2"><input defaultValue={J_TestScore} className="w-full p-1 rounded outline-none" /></td>
                  <td colSpan={2} className="border border-black p-2"><input defaultValue={J_TestExamDate} className="w-full p-1 rounded outline-none" /></td>
                  <td colSpan={3} className="border border-black p-2"><input defaultValue={J_TestResultPublishDate} className="w-full p-1 rounded outline-none" /></td>
                  <td colSpan={3} className="border border-black p-2"><input defaultValue={J_TestExpectedExamDate} className="w-full p-1 rounded outline-none" /></td>
                </tr>
                <tr>
                  <td colSpan={2} className="border border-black p-2 font-bold">Top J</td>
                  <td colSpan={2} className="border border-black p-2"><input defaultValue={Top_JScore} className="w-full p-1 rounded outline-none" /></td>
                  <td colSpan={2} className="border border-black p-2"><input defaultValue={Top_JExamDate} className="w-full p-1 rounded outline-none" /></td>
                  <td colSpan={3} className="border border-black p-2"><input defaultValue={Top_JResultPublishDate} className="w-full p-1 rounded outline-none" /></td>
                  <td colSpan={3} className="border border-black p-2"><input defaultValue={Top_JExpectedExamDate} className="w-full p-1 rounded outline-none" /></td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Submit Button */}
          <div className='text-center my-8'>
            <PrintingButton />
          </div>
        </form>
        <p className='text-center text-sm text-red-600  bg-red-50 p-3 rounded-md border border-red-200'>
          বি.দ্র.: এই ফর্মটির সকল তথ্য অবশ্যই পূরণ করতে হবে। কোন কিছু না বুঝতে
          পারলে সংশ্লিষ্ট ব্যক্তির কাছ থেকে বুঝে নিতে হবে এবং সকল তথ্য ইংরেজিতে
          পূরণীয়।
        </p>
      </div >
    </div >


  );
}

