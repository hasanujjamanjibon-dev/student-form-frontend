import { useLocation, useSearchParams } from 'react-router-dom';
import usePreventActions from '../components/usePreventActions';
import { useEffect, useState } from 'react';
import PrintingButton from '../components/PrintingButton';
import { Atom } from 'react-loading-indicators';

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
  }, [searchParams, location?.state, baseURL]);
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

  function formatToDDMMMYYYY(dateStr) {
    if (dateStr === '') {
      return '';
    }
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, '0');
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  const studentDob = formatToDDMMMYYYY(dob);
  const fatherDob = formatToDDMMMYYYY(fatherDOB);
  const motherDob = formatToDDMMMYYYY(motherDOB);
  const siblingDob = formatToDDMMMYYYY(siblingDOB);
  const primaryGraduationYear = formatToDDMMMYYYY(PrimaryGraduationYear);
  const sSCGraduationYear = formatToDDMMMYYYY(SSCGraduationYear);
  const hSC_DiplomaGraduationYear = formatToDDMMMYYYY(
    HSC_DiplomaGraduationYear
  );
  const honorsGraduationYear = formatToDDMMMYYYY(HonorsGraduationYear);
  const mastersGraduationYear = formatToDDMMMYYYY(MastersGraduationYear);

  if (!data) {
    return (
      <div className='flex items-center justify-center h-screen text-center'>
        <Atom
          color='#46010e'
          size='medium'
          text='Sakurazaka Japanese Language  & Cultural Center'
          textColor='#660000'
        />
      </div>
    );
  }

  return (
    <div className='min-h-screen p-4 bg-gray-100 md:p-6 '>
      <div
        id='body'
        className='max-w-5xl px-8 py-2 mx-auto text-sm bg-white md:text-base'
      >
        {/* File Header */}
        <div
          id='file_title'
          className='mb-4 text-xl font-bold text-center border-b-2 border-black'
        >
          FILE NO..................
        </div>
        <form action='POST'>
          {/* Student Info */}
          <section className='overflow-x-auto border-2 border-black'>
            <div className='bg-[#e0e0e0] text-center font-bold border-b-2  border-black p-1 text-xs md:text-xl'>
              STUDENT'S INFORMATION FOR DOCUMENT
            </div>
            <table className='w-full border-collapse border-2 border-[#b3b2b2]  table-auto md:table-fixed'>
              <tbody>
                <tr className='border-b-2 border-[#b3b2b2]'>
                  <td className='p-1 border-r-2 font-bold bg-[#F2F2F2] border-[#b3b2b2]'>
                    Student's Name:
                  </td>
                  <td className='p-1'>
                    <input
                      readOnly
                      defaultValue={studentName}
                      className='w-full px-2 text-lg rounded outline-none capitalize'
                    />
                  </td>
                  <td className='p-1 border-x-2 font-bold bg-[#F2F2F2] text-center border-[#b3b2b2]'>
                    Mobile:
                  </td>
                  <td className='p-1'>
                    <input
                      readOnly
                      defaultValue={studentMobile}
                      className='w-full px-2 text-lg rounded outline-none capitalize '
                    />
                  </td>
                </tr>
                <tr className='border-b-2 border-[#b3b2b2]'>
                  <td className='p-1 border-r-2 font-bold bg-[#F2F2F2] border-[#b3b2b2]'>
                    Father's Name:
                  </td>
                  <td className='p-1'>
                    <input
                      readOnly
                      defaultValue={fatherName}
                      className='w-full px-2 text-lg rounded outline-none capitalize '
                    />
                  </td>
                  <td className='p-1 border-x-2 font-bold bg-[#F2F2F2] text-center border-[#b3b2b2]'>
                    Mobile:
                  </td>
                  <td className='p-1'>
                    <input
                      readOnly
                      defaultValue={fatherMobile}
                      className='w-full px-2 text-lg rounded outline-none capitalize'
                    />
                  </td>
                </tr>
                <tr className='border-b-2 border-[#b3b2b2]'>
                  <td className='p-1 border-r-2 font-bold bg-[#F2F2F2] border-[#b3b2b2]'>
                    Mother's Name:
                  </td>
                  <td className='p-1'>
                    <input
                      readOnly
                      defaultValue={motherName}
                      className='w-full px-2 text-lg rounded outline-none capitalize '
                    />
                  </td>
                  <td className='p-1 border-x-2 font-bold bg-[#F2F2F2] text-center border-[#b3b2b2]'>
                    Mobile:
                  </td>
                  <td className='p-1'>
                    <input
                      readOnly
                      defaultValue={motherMobile}
                      className='w-full px-2 text-lg rounded outline-none capitalize '
                    />
                  </td>
                </tr>
                <tr className='border-b-2 border-[#b3b2b2]'>
                  <td className='p-1 border-r-2 font-bold bg-[#F2F2F2] border-[#b3b2b2] '>
                    Date of Birth:
                  </td>
                  <td className='p-1' colSpan='3'>
                    <input
                      readOnly
                      defaultValue={studentDob}
                      type='text'
                      className='w-full px-2 text-lg rounded outline-none capitalize text'
                    />
                  </td>
                </tr>
                <tr className='border-b-2 border-[#b3b2b2]'>
                  <td className='p-1 border-r-2 font-bold bg-[#F2F2F2] border-[#b3b2b2]'>
                    Present Address:
                  </td>
                  <td className='p-1' colSpan='3'>
                    <input
                      readOnly
                      defaultValue={presentAddress}
                      className='w-full px-2 text-lg rounded outline-none capitalize '
                    />
                  </td>
                </tr>
                <tr>
                  <td className='p-1 border-r-2 font-bold bg-[#F2F2F2] border-[#b3b2b2]'>
                    Permanent Address:
                  </td>
                  <td className='p-1' colSpan='3'>
                    <input
                      readOnly
                      defaultValue={permanentAddress}
                      className='w-full px-2 text-lg rounded outline-none capitalize '
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Guarantor Info */}
          <section className='my-8 overflow-x-auto border-2 border-black'>
            <div className='bg-[#e0e0e0] text-center font-bold border-b-2  border-black p-1 text-xs md:text-xl'>
              GUARANTOR'S INFORMATION
            </div>
            <table className='w-full border-collapse border-2 border-[#b3b2b2] table-auto md:table-fixed'>
              <tbody>
                <tr className='border-b-2 border-[#b3b2b2]'>
                  <td className='p-1 border-r-2 border-[#b3b2b2] font-bold w-1/4 bg-[#F2F2F2]'>
                    Sponsor's Name:
                  </td>
                  <td className='p-1' colSpan='3'>
                    <input
                      readOnly
                      defaultValue={sponsorName}
                      className='w-full px-2 text-lg rounded outline-none capitalize '
                    />
                  </td>
                </tr>
                <tr className='border-b-2 border-[#b3b2b2]'>
                  <td className='p-1 border-r-2 border-[#b3b2b2] font-bold  bg-[#F2F2F2]'>
                    Sponsor's Father's Name:
                  </td>
                  <td className='p-1' colSpan='3'>
                    <input
                      readOnly
                      defaultValue={sponsorFatherName}
                      className='w-full px-2 text-lg rounded outline-none capitalize '
                    />
                  </td>
                </tr>
                <tr className='border-b-2 border-[#b3b2b2]'>
                  <td className='p-1 border-r-2 border-[#b3b2b2] font-bold  bg-[#F2F2F2]'>
                    Sponsor's Mother's Name:
                  </td>
                  <td className='p-1' colSpan='3'>
                    <input
                      readOnly
                      defaultValue={sponsorMotherName}
                      className='w-full px-2 text-lg rounded outline-none capitalize '
                    />
                  </td>
                </tr>
                <tr className='border-b-2 border-[#b3b2b2]'>
                  <td className='p-1 border-r-2 border-[#b3b2b2] font-bold  bg-[#F2F2F2]'>
                    Permanent Address:
                  </td>
                  <td className='p-1' colSpan='3'>
                    <input
                      readOnly
                      defaultValue={sponsorPermanentAddress}
                      className='w-full px-2 text-lg rounded outline-none capitalize '
                    />
                  </td>
                </tr>
                <tr className='border-b-2 border-[#b3b2b2]'>
                  <td className='p-1 border-r-2 border-[#b3b2b2] font-bold  bg-[#F2F2F2]'>
                    Business/Company Name:
                  </td>
                  <td className='p-1'>
                    <input
                      readOnly
                      defaultValue={businessName}
                      className='w-full px-2 text-lg rounded outline-none capitalize '
                    />
                  </td>
                  <td className='p-1 border-x-2 border-[#b3b2b2] font-bold  text-center bg-[#F2F2F2]'>
                    Type of Business:
                  </td>
                  <td className='p-1'>
                    <input
                      readOnly
                      defaultValue={businessType}
                      className='w-full px-2 text-lg rounded outline-none capitalize '
                    />
                  </td>
                </tr>
                <tr className='border-b-2 border-[#b3b2b2]'>
                  <td className='p-1 border-r-2 border-[#b3b2b2] font-bold  bg-[#F2F2F2]'>
                    Business Address:
                  </td>
                  <td className='p-1' colSpan='3'>
                    <input
                      readOnly
                      defaultValue={businessAddress}
                      className='w-full px-2 text-lg rounded outline-none capitalize '
                    />
                  </td>
                </tr>
                <tr>
                  <td className='p-1 border-r-2 border-[#b3b2b2] font-bold  bg-[#F2F2F2]'>
                    Office Number:
                  </td>
                  <td className='p-1'>
                    <input
                      readOnly
                      defaultValue={officeNumber}
                      className='w-full px-2 text-lg rounded outline-none capitalize '
                    />
                  </td>
                  <td className='p-1 border-x-2 border-[#b3b2b2] font-bold text-center   bg-[#F2F2F2]'>
                    Student Another Number:
                  </td>
                  <td className='p-1'>
                    <input
                      readOnly
                      defaultValue={studentAnotherNumber}
                      className='w-full px-2 text-lg rounded outline-none capitalize '
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          {/* Relation Information */}
          <section className='max-w-5xl mx-auto overflow-x-auto bg-white'>
            <div className='overflow-x-auto'>
              <table className='w-full text-sm text-center border border-collapse border-black table-auto md:text-base md:table-fixed'>
                <thead>
                  <tr className='bg-[#e0e0e0] border border-black'>
                    <th colSpan={2} className='p-1 border border-black'>
                      Name
                    </th>
                    <th className='p-1 border border-black'>Relation</th>
                    <th className='p-1 border border-black'>Date of Birth</th>
                    <th className='p-1 border border-black'>Occupation</th>
                  </tr>
                </thead>
                <tbody className='border border-black'>
                  <tr>
                    <td colSpan={2} className='p-1 border border-black'>
                      <input
                        readOnly
                        defaultValue={fatherNameFamily}
                        className='w-full px-2 text-lg rounded outline-none capitalize '
                      />
                    </td>
                    <td className='p-1 border border-black'>Father</td>
                    <td className='p-1 border border-black'>
                      <input
                        readOnly
                        defaultValue={fatherDob}
                        className='w-full px-2 text-lg rounded outline-none capitalize text-center'
                      />
                    </td>
                    <td className='p-1 border border-black'>
                      <input
                        readOnly
                        defaultValue={fatherOccupation}
                        className='w-full px-2 text-lg rounded outline-none capitalize '
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} className='p-1 border border-black '>
                      <input
                        readOnly
                        defaultValue={motherNameFamily}
                        className='w-full px-2 text-lg rounded outline-none capitalize '
                      />
                    </td>
                    <td className='p-1 border border-black'>Mother</td>
                    <td className='p-1 border border-black'>
                      <input
                        readOnly
                        defaultValue={motherDob}
                        className='w-full px-2 text-lg rounded outline-none capitalize  text-center'
                      />
                    </td>
                    <td className='p-1 border border-black'>
                      <input
                        readOnly
                        defaultValue={motherOccupation}
                        className='w-full px-2 text-lg rounded outline-none capitalize '
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} className='p-1 border border-black'>
                      <input
                        readOnly
                        defaultValue={siblingName}
                        className='w-full px-2 text-lg rounded outline-none capitalize  '
                      />
                    </td>
                    <td className='p-1 border border-black'>Brother/Sister</td>
                    <td className='p-1 border border-black'>
                      <input
                        readOnly
                        defaultValue={siblingDob}
                        className='w-full px-2 text-lg rounded outline-none capitalize text-center'
                      />
                    </td>
                    <td className='p-1 border border-black'>
                      <input
                        readOnly
                        defaultValue={siblingOccupation}
                        className='w-full px-2 text-lg rounded outline-none capitalize '
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          {/* Guarantor Info */}
          <section className='my-8 overflow-x-auto border-2 border-black'>
            <div className='bg-[#e0e0e0] text-center font-bold border-b-2  border-black p-1 text-xs md:text-xl'>
              Educational Record
            </div>
            <table className='w-full border-collapse border-2 border-[#b3b2b2] table-auto md:table-fixed'>
              <thead>
                <tr className='bg-[#e0e0e0] font-bold'>
                  <th colSpan={1} className='p-1 border border-black '>
                    Degree
                  </th>
                  <th colSpan={2} className='p-1 border border-black '>
                    Name of School
                  </th>
                  <th colSpan={3} className='p-1 border border-black '>
                    School Address
                  </th>
                  <th className='p-1 border border-black'>Graduation Year</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    colSpan={1}
                    className='p-1 font-bold border border-black '
                  >
                    Primary School
                  </td>
                  <td colSpan={2} className='p-1 border border-black'>
                    <textarea
                      readOnly
                      defaultValue={PrimarySchoolName}
                      className='w-full px-2 text-lg rounded outline-none capitalize  resize-none'
                    />
                  </td>
                  <td colSpan={3} className='p-1 border border-black'>
                    <textarea
                      readOnly
                      defaultValue={PrimarySchoolAddress}
                      className='w-full px-2 text-lg rounded outline-none capitalize  resize-none'
                    />
                  </td>
                  <td className='p-1 border border-black'>
                    <input
                      readOnly
                      defaultValue={primaryGraduationYear}
                      className='w-full px-2 text-lg rounded outline-none capitalize text-center'
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={1}
                    className='p-1 font-bold border border-black size-fit'
                  >
                    S.S.C
                  </td>
                  <td colSpan={2} className='p-1 border border-black'>
                    <textarea
                      readOnly
                      defaultValue={SSCSchoolName}
                      className='w-full px-2 text-lg rounded outline-none capitalize  resize-none'
                    />
                  </td>
                  <td colSpan={3} className='p-1 border border-black'>
                    <textarea
                      readOnly
                      defaultValue={SSCSchoolAddress}
                      className='w-full px-2 text-lg rounded outline-none capitalize  resize-none'
                    />
                  </td>
                  <td className='p-1 border border-black'>
                    <input
                      readOnly
                      defaultValue={sSCGraduationYear}
                      className='w-full px-2 text-lg rounded outline-none capitalize text-center'
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={1}
                    className='p-1 font-bold border border-black size-fit'
                  >
                    H.S.C/Diploma
                  </td>
                  <td colSpan={2} className='p-1 border border-black'>
                    <textarea
                      readOnly
                      defaultValue={HSC_DiplomaSchoolName}
                      className='w-full px-2 text-lg rounded outline-none capitalize  resize-none'
                    />
                  </td>
                  <td colSpan={3} className='p-1 border border-black'>
                    <textarea
                      readOnly
                      defaultValue={HSC_DiplomaSchoolAddress}
                      className='w-full px-2 text-lg rounded outline-none capitalize  resize-none'
                    />
                  </td>
                  <td className='p-1 border border-black'>
                    <input
                      readOnly
                      defaultValue={hSC_DiplomaGraduationYear}
                      className='w-full px-2 text-lg rounded outline-none capitalize text-center'
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={1}
                    className='p-1 font-bold border border-black size-fit'
                  >
                    Honour's
                  </td>
                  <td colSpan={2} className='p-1 border border-black'>
                    <textarea
                      readOnly
                      defaultValue={HonorsSchoolName}
                      className='w-full px-2 text-lg rounded outline-none capitalize  resize-none'
                    />
                  </td>
                  <td colSpan={3} className='p-1 border border-black'>
                    <textarea
                      readOnly
                      defaultValue={HonorsSchoolAddress}
                      className='w-full px-2 text-lg rounded outline-none capitalize  resize-none'
                    />
                  </td>
                  <td className='p-1 border border-black'>
                    <input
                      readOnly
                      defaultValue={honorsGraduationYear}
                      className='w-full px-2 text-lg rounded outline-none capitalize text-center'
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={1}
                    className='p-1 font-bold border border-black size-fit'
                  >
                    Master's
                  </td>
                  <td colSpan={2} className='p-1 border border-black'>
                    <textarea
                      readOnly
                      defaultValue={MastersSchoolName}
                      className='w-full px-2 text-lg rounded outline-none capitalize  resize-none'
                    />
                  </td>
                  <td colSpan={3} className='p-1 border border-black'>
                    <textarea
                      readOnly
                      defaultValue={MastersSchoolAddress}
                      className='w-full px-2 text-lg rounded outline-none capitalize  resize-none'
                    />
                  </td>
                  <td className='p-1 border border-black'>
                    <input
                      readOnly
                      defaultValue={mastersGraduationYear}
                      className='w-full px-2 text-lg rounded outline-none capitalize text-center'
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          {/* Student Running Academic Details */}
          <section className='my-8 overflow-x-auto border-2 border-black'>
            <div className='bg-[#e0e0e0] text-center font-bold border-b-2  w-full border-black p-1 text-xs md:text-xl'>
              Student Running Academic Details
            </div>
            <table className='w-full border-collapse border-2 border-[#b3b2b2] table-auto md:table-fixed'>
              <thead>
                <tr className='bg-[#e0e0e0]'>
                  <th colSpan={2} className='p-1 border border-black '>
                    College/University Name
                  </th>
                  <th className='p-1 border border-black '>Subject</th>
                  <th className='p-1 border border-black '>Roll No.</th>
                  <th className='p-1 border border-black '>Reg. No.</th>
                  <th className='p-1 border border-black '>Year</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={2} className='p-1 border border-black'>
                    <textarea
                      readOnly
                      defaultValue={currentCollegeUniversityName}
                      className='w-full px-2 text-lg rounded outline-none capitalize  resize-none'
                    />
                  </td>
                  <td className='p-1 border border-black'>
                    <input
                      readOnly
                      defaultValue={currentSubject}
                      className='w-full px-2 text-lg rounded outline-none capitalize  resize-none'
                    />
                  </td>
                  <td className='p-1 border border-black'>
                    <input
                      readOnly
                      defaultValue={currentRollNo}
                      className='w-full px-2 text-lg rounded outline-none capitalize '
                    />
                  </td>
                  <td className='p-1 border border-black'>
                    <input
                      readOnly
                      defaultValue={currentRegistrationNo}
                      className='w-full px-2 text-lg rounded outline-none capitalize '
                    />
                  </td>
                  <td className='p-1 border border-black'>
                    <input
                      readOnly
                      defaultValue={currentAcademicYear}
                      className='w-full px-2 text-lg rounded outline-none capitalize '
                    />
                  </td>
                </tr>
              </tbody>
              <thead>
                <tr className='bg-[#e0e0e0]'>
                  <th
                    colSpan={6}
                    className='p-1 px-2 text-center border border-black'
                  >
                    College/University Full Address
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={6} className='p-1 border border-black'>
                    <input
                      readOnly
                      defaultValue={currentCollegeUniversityAddress}
                      className='w-full px-2 text-lg rounded outline-none capitalize '
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          {/*   Japanese Language Test &lang;N5/N4&rang; */}
          <section className='mt-8 overflow-x-auto border-2 border-black'>
            <div className='bg-[#e0e0e0] text-center font-bold border-b-2  border-black p-1 text-xs md:text-xl'>
              Japanese Language Test &lang;N5/N4&rang;
            </div>
            <table className='w-full border-collapse border-2  border-[#b3b2b2] table-auto md:table-fixed '>
              <thead>
                <tr className='bg-[#e0e0e0] '>
                  <th colSpan={2} className='p-1 border border-black '>
                    Test Name
                  </th>
                  <th colSpan={2} className='p-1 border border-black '>
                    Score
                  </th>
                  <th colSpan={3} className='p-1 border border-black '>
                    Exam Date{' '}
                  </th>
                  <th colSpan={3} className='p-1 border border-black '>
                    Result Publish Date
                  </th>
                  <th colSpan={3} className='p-1 border border-black '>
                    Expected Exam Date
                  </th>
                </tr>
              </thead>
              <tbody className='text-center'>
                <tr>
                  <td
                    colSpan={2}
                    className='p-1 font-bold text-left border border-black'
                  >
                    JLPT
                  </td>
                  <td colSpan={2} className='p-1 border border-black'>
                    <input
                      readOnly
                      defaultValue={JLPTScore}
                      className='w-full px-2 text-lg text-center rounded outline-none'
                    />
                  </td>
                  <td colSpan={3} className='p-1 border border-black'>
                    <input
                      readOnly
                      defaultValue={JLPTExamDate}
                      className='w-full px-2 text-lg rounded outline-none capitalize '
                    />
                  </td>
                  <td colSpan={3} className='p-1 border border-black'>
                    <input
                      readOnly
                      defaultValue={JLPTResultPublishDate}
                      className='w-full px-2 text-lg rounded outline-none capitalize '
                    />
                  </td>
                  <td colSpan={3} className='p-1 border border-black '>
                    <input
                      readOnly
                      defaultValue={JLPTExpectedExamDate}
                      className='w-full px-2 text-lg rounded outline-none capitalize '
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    className='p-1 font-bold text-left border border-black'
                  >
                    NAT
                  </td>
                  <td colSpan={2} className='p-1 border border-black'>
                    <input
                      readOnly
                      defaultValue={NATScore}
                      className='w-full px-2 text-lg text-center rounded outline-none'
                    />
                  </td>
                  <td colSpan={3} className='p-1 border border-black'>
                    <input
                      readOnly
                      defaultValue={NATExamDate}
                      className='w-full px-2 text-lg rounded outline-none capitalize '
                    />
                  </td>
                  <td colSpan={3} className='p-1 border border-black'>
                    <input
                      readOnly
                      defaultValue={NATResultPublishDate}
                      className='w-full px-2 text-lg rounded outline-none capitalize '
                    />
                  </td>
                  <td colSpan={3} className='p-1 border border-black'>
                    <input
                      readOnly
                      defaultValue={NATExpectedExamDate}
                      className='w-full px-2 text-lg rounded outline-none capitalize '
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    className='p-1 font-bold text-left border border-black'
                  >
                    JLCT
                  </td>
                  <td colSpan={2} className='p-1 border border-black'>
                    <input
                      readOnly
                      defaultValue={JLCTScore}
                      className='w-full px-2 text-lg text-center rounded outline-none'
                    />
                  </td>
                  <td colSpan={3} className='p-1 border border-black'>
                    <input
                      readOnly
                      defaultValue={JLCTExamDate}
                      className='w-full px-2 text-lg rounded outline-none capitalize '
                    />
                  </td>
                  <td colSpan={3} className='p-1 border border-black'>
                    <input
                      readOnly
                      defaultValue={JLCTResultPublishDate}
                      className='w-full px-2 text-lg rounded outline-none capitalize '
                    />
                  </td>
                  <td colSpan={3} className='p-1 border border-black'>
                    <input
                      readOnly
                      defaultValue={JLCTExpectedExamDate}
                      className='w-full px-2 text-lg rounded outline-none capitalize '
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    className='p-1 font-bold text-left border border-black'
                  >
                    J. Test
                  </td>
                  <td colSpan={2} className='p-1 border border-black'>
                    <input
                      readOnly
                      defaultValue={J_TestScore}
                      className='w-full px-2 text-lg text-center rounded outline-none'
                    />
                  </td>
                  <td colSpan={3} className='p-1 border border-black'>
                    <input
                      readOnly
                      defaultValue={J_TestExamDate}
                      className='w-full px-2 text-lg rounded outline-none capitalize '
                    />
                  </td>
                  <td colSpan={3} className='p-1 border border-black'>
                    <input
                      readOnly
                      defaultValue={J_TestResultPublishDate}
                      className='w-full px-2 text-lg rounded outline-none capitalize '
                    />
                  </td>
                  <td colSpan={3} className='p-1 border border-black'>
                    <input
                      readOnly
                      defaultValue={J_TestExpectedExamDate}
                      className='w-full px-2 text-lg rounded outline-none capitalize '
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    className='p-1 font-bold text-left border border-black'
                  >
                    Top J
                  </td>
                  <td colSpan={2} className='p-1 border border-black'>
                    <input
                      readOnly
                      defaultValue={Top_JScore}
                      className='w-full px-2 text-lg text-center rounded outline-none'
                    />
                  </td>
                  <td colSpan={3} className='p-1 border border-black'>
                    <input
                      readOnly
                      defaultValue={Top_JExamDate}
                      className='w-full px-2 text-lg rounded outline-none capitalize '
                    />
                  </td>
                  <td colSpan={3} className='p-1 border border-black'>
                    <input
                      readOnly
                      defaultValue={Top_JResultPublishDate}
                      className='w-full px-2 text-lg rounded outline-none capitalize '
                    />
                  </td>
                  <td colSpan={3} className='p-1 border border-black'>
                    <input
                      readOnly
                      defaultValue={Top_JExpectedExamDate}
                      className='w-full px-2 text-lg rounded outline-none capitalize '
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          {/* Submit Button */}
          <section className='my-4 text-center'>
            <PrintingButton />
          </section>
        </form>
      </div>
    </div>
  );
}
