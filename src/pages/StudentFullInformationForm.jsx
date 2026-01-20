import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const StudentFullInformationForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const baseURL = import.meta.env.VITE_baseURL;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => (data[key] = value));

    if (data.studentMobile.length !== 10) {
      return Swal.fire({
        position: 'center',
        icon: 'error',
        title: `ছাত্র/ছাত্রীর নাম্বার অবশ্যই ১০ ডিজিট এবং প্রথম সংখ্যা ০ ছাড়া হবে।`,
        showConfirmButton: false,
        timer: 1500,
      });
    }

    // motherMobile
    if (data.motherMobile.length !== 10) {
      return Swal.fire({
        position: 'center',
        icon: 'error',
        title: `মা' এর নাম্বার অবশ্যই ১০ ডিজিট এবং প্রথম সংখ্যা ০ ছাড়া হবে।`,
        showConfirmButton: false,
        timer: 1500,
      });
    }

    // fatherMobile
    if (data.fatherMobile.length !== 10) {
      return Swal.fire({
        position: 'center',
        icon: 'error',
        title: `বাবা'র নাম্বার অবশ্যই ১০ ডিজিট এবং প্রথম সংখ্যা ০ ছাড়া হবে।`,
        showConfirmButton: false,
        timer: 1500,
      });
    }

    // officeNumber
    if (data.officeNumber.length !== 10) {
      return Swal.fire({
        position: 'center',
        icon: 'error',
        title: `অফিস নাম্বার অবশ্যই ১০ ডিজিট এবং প্রথম সংখ্যা ০ ছাড়া হবে।`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
    // studentAnotherNumber
    if (data.studentAnotherNumber.length !== 10) {
      return Swal.fire({
        position: 'center',
        icon: 'error',
        title: `ছাত্র/ছাত্রীর ২য় নাম্বার অবশ্যই ১০ ডিজিট এবং প্রথম সংখ্যা ০ ছাড়া হবে।`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
    if (
      data.studentMobile === data.studentAnotherNumber ||
      data.motherMobile === data.studentAnotherNumber ||
      data.fatherMobile === data.studentAnotherNumber ||
      data.officeNumber === data.studentAnotherNumber
    ) {
      return Swal.fire({
        position: 'center',
        icon: 'error',
        title:
          'ছাত্র/ছাত্রীর নাম্বার একই দেওয়া যাবেনা, ছাত্র/ছাত্রীর ভিন্ন নাম্বার দিতে হবে।',
        showConfirmButton: false,
        timer: 1500,
      });
    }
    // Address
    data.dob = data.dob.toString();
    data.fatherDOB = data.fatherDOB.toString();
    data.motherDOB = data.motherDOB.toString();
    data.siblingDOB = data.siblingDOB.toString();

    data.studentMobile = `0${data.studentMobile}`;
    data.motherMobile = `0${data.motherMobile}`;
    data.fatherMobile = `0${data.fatherMobile}`;
    data.officeNumber = `0${data.officeNumber}`;
    data.studentAnotherNumber = `0${data.studentAnotherNumber}`;

    const webAppUrl = `${baseURL}/api/data/`; // Backend proxy URL
    setLoading(true);
    try {
      const response = await fetch(webAppUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (result.success) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `Data Submitted Successfully!`,
          showConfirmButton: false,
          timer: 1500,
        });
        // Redirect user to print preview page after 2 seconds
        setTimeout(() => {
          // navigate('/print-preview');
          navigate('/print-preview', { state: { submittedData: data } });
        }, 700);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='max-w-5xl p-2 mx-auto text-left shadow-lg shadow-gray-300'>
      {/* Card */}
      <div className='p-6 space-y-8 bg-white shadow-lg rounded-xl'>
        <h1 className='pb-4 text-lg font-bold text-center border-b sm:text-2xl'>
          STUDENT'S INFORMATION FOR DOCUMENT
        </h1>

        {/* Student's Information Section - Image 1 */}
        <section>
          <h2 className='px-3 py-2 mb-4 text-sm font-semibold text-white bg-gray-900 rounded-md sm:text-base'>
            Student's Information
          </h2>

          <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
              {/* Student's Name (Required) */}
              <div className='space-y-1'>
                <label
                  htmlFor='student-name'
                  className='block text-sm font-medium text-gray-700'
                >
                  Student's Name
                </label>
                <input
                  type='text'
                  id='student-name'
                  name='studentName'
                  placeholder='সার্টিফিকেট অনুযায়ী নিজের সম্পূর্ণ নাম'
                  className='input'
                  required
                />
              </div>

              {/* Mobile 1 (Student's) */}
              <div className='space-y-1'>
                <label
                  htmlFor='mobile-1'
                  className='block text-sm font-medium text-gray-700'
                >
                  Student's Mobile
                </label>
                <div className='flex'>
                  <span className='inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md'>
                    +880
                  </span>
                  <input
                    type='text'
                    id='mobile-1'
                    name='studentMobile'
                    placeholder='নিজের মোবাইল নম্বর'
                    className='input !rounded-l-none'
                  />
                </div>
              </div>

              {/* Father's Name */}
              <div className='space-y-1'>
                <label
                  htmlFor='father-name'
                  className='block text-sm font-medium text-gray-700'
                >
                  Father's Name
                </label>
                <input
                  type='text'
                  id='father-name'
                  name='fatherName'
                  placeholder='সার্টিফিকেট অনুযায়ী বাবার সম্পূর্ণ নাম'
                  className='input'
                />
              </div>

              {/* Mobile 2 (Father's) */}
              <div className='space-y-1'>
                <label
                  htmlFor='mobile-2'
                  className='block text-sm font-medium text-gray-700'
                >
                  Father's Mobile
                </label>
                <div className='flex'>
                  <span className='inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md'>
                    +880
                  </span>
                  <input
                    type='text'
                    id='mobile-2'
                    name='fatherMobile'
                    placeholder='বাবার মোবাইল নম্বর'
                    className='input !rounded-l-none'
                  />
                </div>
              </div>

              {/* Mother's Name */}
              <div className='space-y-1'>
                <label
                  htmlFor='mother-name'
                  className='block text-sm font-medium text-gray-700'
                >
                  Mother's Name
                </label>
                <input
                  type='text'
                  id='mother-name'
                  name='motherName'
                  placeholder='সার্টিফিকেট অনুযায়ী মায়ের সম্পূর্ণ নাম'
                  className='input'
                />
              </div>

              {/* Mobile 3 (Mother's) */}
              <div className='space-y-1 text-left'>
                <label
                  htmlFor='mobile-3'
                  className='block text-sm font-medium text-gray-700'
                >
                  Mother's Mobile
                </label>
                <div className='flex'>
                  <span className='inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md'>
                    +880
                  </span>
                  <input
                    type='text'
                    id='mobile-3'
                    name='motherMobile'
                    placeholder='মায়ের মোবাইল নম্বর'
                    className='input !rounded-l-none'
                  />
                </div>
              </div>

              {/* Date of Birth */}
              <div className='space-y-1 sm:col-span-3'>
                <label
                  htmlFor='dob'
                  className='block text-sm font-medium text-gray-700'
                >
                  Date of Birth
                </label>
                <div className='relative max-w-sm'>
                  <input
                    type='date'
                    id='dob'
                    name='dob'
                    placeholder='yyyy/mm/dd'
                    className='pr-10 input'
                  />
                </div>
              </div>
            </div>

            {/* Present Address */}
            <div className='mt-4 space-y-1'>
              <label
                htmlFor='present-address'
                className='block text-sm font-medium text-gray-700'
              >
                Present Address
              </label>
              <textarea
                id='present-address'
                name='presentAddress'
                placeholder='নিজের বর্তমান ঠিকানা'
                className='h-14 resize-none input'
              ></textarea>
            </div>

            {/* Permanent Address */}
            <div className='mt-4 space-y-1'>
              <label
                htmlFor='permanent-address'
                className='block text-sm font-medium text-gray-700'
              >
                Permanent Address
              </label>
              <textarea
                id='permanent-address'
                name='permanentAddress'
                placeholder='পাসপোর্ট/জন্মনিবন্ধন অনুযায়ী স্থায়ী ঠিকানা'
                className='h-14 resize-none input'
              ></textarea>
            </div>

            {/* Separator */}

            {/* Guarantor’s (Sponsor’s) Information Section - Image 2 */}
            <section className='mt-12'>
              <h2 className='px-3 py-2 mb-4 text-sm font-semibold text-white bg-gray-900 rounded-md sm:text-base'>
                Guarantor’s (Sponsor’s) Information
              </h2>
              <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
                <div className='space-y-1'>
                  <label
                    htmlFor='sponsor-name'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Sponsor’s Name
                  </label>
                  <input
                    type='text'
                    id='sponsor-name'
                    name='sponsorName'
                    className='input'
                  />
                </div>
                <div className='space-y-1'>
                  <label
                    htmlFor='sponsor-father-name'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Sponsor’s Father’s Name
                  </label>
                  <input
                    type='text'
                    id='sponsor-father-name'
                    name='sponsorFatherName'
                    className='input'
                  />
                </div>
                <div className='space-y-1'>
                  <label
                    htmlFor='sponsor-mother-name'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Sponsor’s Mother’s Name
                  </label>
                  <input
                    type='text'
                    id='sponsor-mother-name'
                    name='sponsorMotherName'
                    className='input'
                  />
                </div>
              </div>

              <div className='mt-4 space-y-1'>
                <label
                  htmlFor='sponsor-permanent-address'
                  className='block text-sm font-medium text-gray-700'
                >
                  Permanent Address
                </label>
                <textarea
                  id='sponsor-permanent-address'
                  name='sponsorPermanentAddress'
                  className='h-14 resize-none input'
                ></textarea>
              </div>
              <div className='grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2'>
                <div className='space-y-1'>
                  <label
                    htmlFor='business-name'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Business/Company Name
                  </label>
                  <input
                    type='text'
                    id='business-name'
                    name='businessName'
                    className='input'
                  />
                </div>
                <div className='space-y-1'>
                  <label
                    htmlFor='business-type'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Type of Business
                  </label>
                  <input
                    type='text'
                    id='business-type'
                    name='businessType'
                    className='input'
                  />
                </div>
              </div>
              <div className='mt-4 space-y-1'>
                <label
                  htmlFor='business-address'
                  className='block text-sm font-medium text-gray-700'
                >
                  Business Address
                </label>
                <textarea
                  id='business-address'
                  name='businessAddress'
                  className='h-14 resize-none input'
                ></textarea>
              </div>
              <div className='grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2'>
                <div className='space-y-1'>
                  <label
                    htmlFor='office-number'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Office Number
                  </label>
                  <div className='flex'>
                    <span className='inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md'>
                      +880
                    </span>
                    <input
                      type='text'
                      id='office-number'
                      name='officeNumber'
                      className='input !rounded-l-none'
                    />
                  </div>
                </div>
                <div className='space-y-1'>
                  <label
                    htmlFor='student-another-number'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Student Another Number
                  </label>
                  <div className='flex'>
                    <span className='inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md'>
                      +880
                    </span>
                    <input
                      type='text'
                      id='student-another-number'
                      name='studentAnotherNumber'
                      className='input !rounded-l-none'
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Family Information Section - Image 3 */}
            <section className='my-12'>
              <h2 className='px-3 py-2 mb-4 text-sm font-semibold text-white bg-gray-900 rounded-md sm:text-base '>
                Family Information
              </h2>
              <div className='overflow-x-auto'>
                <table className='min-w-full bg-white border border-gray-200 rounded-md'>
                  <thead>
                    <tr className='text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50'>
                      <th className='px-6 py-3 border-2 border-gray-200'>
                        Name
                      </th>
                      <th className='px-6 py-3 border-2 border-gray-200'>
                        Relation
                      </th>
                      <th className='px-6 py-3 border-2 border-gray-200'>
                        Date of Birth
                      </th>
                      <th className='px-6 py-3 border-2 border-gray-200'>
                        Occupation
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Row 1: Father */}
                    <tr>
                      <td className='px-6 py-4 border border-gray-200 whitespace-nowrap'>
                        <input
                          type='text'
                          name='fatherNameFamily'
                          placeholder='বাবার নাম'
                          className='input min-w-[120px]'
                        />
                      </td>
                      <td className='px-6 py-4 border border-gray-200 whitespace-nowrap'>
                        <input
                          type='text'
                          value='Father'
                          readOnly
                          className='input bg-gray-50 min-w-[100px]'
                        />
                      </td>
                      <td className='px-6 py-4 border border-gray-200 whitespace-nowrap'>
                        <div className='relative'>
                          <input
                            type='date'
                            name='fatherDOB'
                            placeholder='yyyy/mm/dd'
                            className='input pr-10 min-w-[120px]'
                          />
                        </div>
                      </td>
                      <td className='px-6 py-4 border border-gray-200 whitespace-nowrap'>
                        <input
                          type='text'
                          name='fatherOccupation'
                          placeholder='বাবার পেশা'
                          className='input min-w-[120px]'
                        />
                      </td>
                    </tr>
                    {/* Row 2: Mother */}
                    <tr>
                      <td className='px-6 py-4 border border-gray-200 whitespace-nowrap'>
                        <input
                          type='text'
                          name='motherNameFamily'
                          placeholder='মায়ের নাম'
                          className='input min-w-[120px]'
                        />
                      </td>
                      <td className='px-6 py-4 border border-gray-200 whitespace-nowrap'>
                        <input
                          type='text'
                          value='Mother'
                          readOnly
                          className='input bg-gray-50 min-w-[100px]'
                        />
                      </td>
                      <td className='px-6 py-4 border border-gray-200 whitespace-nowrap'>
                        <div className='relative'>
                          <input
                            type='date'
                            name='motherDOB'
                            placeholder='yyyy/mm/dd'
                            className='input pr-10 min-w-[120px]'
                          />
                        </div>
                      </td>
                      <td className='px-6 py-4 border border-gray-200 whitespace-nowrap'>
                        <input
                          type='text'
                          name='motherOccupation'
                          placeholder='মায়ের পেশা'
                          className='input min-w-[120px]'
                        />
                      </td>
                    </tr>
                    {/* Row 3: Brother/Sister */}
                    <tr>
                      <td className='px-6 py-4 border whitespace-nowrap'>
                        <input
                          type='text'
                          name='siblingName'
                          placeholder='ভাইবোনের নাম'
                          className='input min-w-[120px]'
                        />
                      </td>
                      <td className='px-6 py-4 border whitespace-nowrap'>
                        <input
                          type='text'
                          value='Brother/Sister'
                          readOnly
                          className='input bg-gray-50 min-w-[100px]'
                        />
                      </td>
                      <td className='px-6 py-4 border whitespace-nowrap'>
                        <div className='relative'>
                          <input
                            type='date'
                            name='siblingDOB'
                            placeholder='yyyy/mm/dd'
                            className='input pr-10 min-w-[120px]'
                          />
                        </div>
                      </td>
                      <td className='px-6 py-4 border whitespace-nowrap'>
                        <input
                          type='text'
                          name='siblingOccupation'
                          placeholder='ভাইবোনের পেশা'
                          className='input min-w-[120px]'
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Educational Record Section - Image 4 */}
            <section>
              <h2 className='px-3 py-2 mb-4 text-sm font-semibold text-white bg-gray-900 rounded-md sm:text-base'>
                Educational Record
              </h2>
              <div className='overflow-x-auto'>
                <table className='min-w-full bg-white border border-gray-200 rounded-md degreeTable'>
                  <thead>
                    <tr className='text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50'>
                      <th className='px-6 py-3 border border-gray-200'>
                        Degree
                      </th>
                      <th className='px-6 py-3 border border-gray-200'>
                        Name of School
                      </th>
                      <th className='px-6 py-3 border border-gray-200'>
                        School Address
                      </th>

                      <th className='px-6 py-3 border border-gray-200'>
                        Graduation Year
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {['Primary', 'SSC', 'HSC_Diploma', 'Honors', 'Masters'].map(
                      (degree, index) => (
                        <tr key={degree}>
                          <td
                            className={`px-6 py-4 whitespace-nowrap ${
                              index < 4 ? 'border border-gray-200' : ''
                            }`}
                          >
                            <input
                              type='text'
                              value={degree.replace('_', '/')}
                              readOnly
                              className='input bg-gray-50 min-w-[80px]'
                            />
                          </td>

                          <td
                            className={`px-6 py-4 whitespace-nowrap ${
                              index < 4 ? 'border border-gray-200' : 'border'
                            }`}
                          >
                            <input
                              type='text'
                              name={`${degree}SchoolName`}
                              className='input min-w-[120px]'
                            />
                          </td>
                          <td
                            className={`px-6 py-4 whitespace-nowrap ${
                              index < 4 ? 'border border-gray-200' : 'border'
                            }`}
                          >
                            <div className='relative'>
                              <input
                                type='text'
                                name={`${degree}SchoolAddress`}
                                className='input pr-10 min-w-[120px]'
                              />
                            </div>
                          </td>
                          <td
                            className={`px-6 py-4 whitespace-nowrap ${
                              index < 4 ? 'border border-gray-200' : 'border'
                            }`}
                          >
                            <div className='relative'>
                              <input
                                type='date'
                                name={`${degree}GraduationYear`}
                                placeholder='dd/mm/yyyy'
                                pattern='\d{2}-\d{2-\d{4}'
                                className='input  pr-10 min-w-[120px]'
                              />
                            </div>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Student Running Academic Details Section - Image 5 */}
            <section className='my-12'>
              <h2 className='px-3 py-2 mb-4 text-sm font-semibold text-white bg-gray-900 rounded-md sm:text-base'>
                Student Running Academic Details
              </h2>
              <div className='mb-4 space-y-1'>
                <label
                  htmlFor='college-university-name'
                  className='block text-sm font-medium text-gray-700'
                >
                  College/University Name
                </label>
                <input
                  type='text'
                  id='college-university-name'
                  name='currentCollegeUniversityName'
                  placeholder='এখন যেখানে পড়ালেখা করছেন তার নাম'
                  className='input'
                />
              </div>
              <div className='mb-4 space-y-1'>
                <label
                  htmlFor='college-university-name'
                  className='block text-sm font-medium text-gray-700'
                >
                  College/University Full Address
                </label>
                <input
                  type='text'
                  id='college-university-name'
                  name='currentCollegeUniversityAddress'
                  placeholder='এখন যেখানে পড়ালেখা করছেন তার ঠিকানা'
                  className='input'
                />
              </div>

              <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
                <div className='space-y-1'>
                  <label
                    htmlFor='subject'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Subject
                  </label>
                  <input
                    type='text'
                    id='subject'
                    name='currentSubject'
                    className='input'
                  />
                </div>
                <div className='space-y-1'>
                  <label
                    htmlFor='roll-no'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Roll No.
                  </label>
                  <input
                    type='text'
                    id='roll-no'
                    name='currentRollNo'
                    className='input'
                  />
                </div>
                <div className='space-y-1'>
                  <label
                    htmlFor='registration-no'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Registration No.
                  </label>
                  <input
                    type='text'
                    id='registration-no'
                    name='currentRegistrationNo'
                    className='input'
                  />
                </div>
                <div className='space-y-1'>
                  <label
                    htmlFor='academic-year'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Year
                  </label>
                  <input
                    type='text'
                    id='academic-year'
                    name='currentAcademicYear'
                    className='input'
                  />
                </div>
                <div className='space-y-1'>
                  <label
                    htmlFor='session'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Session
                  </label>
                  <input
                    type='text'
                    id='session'
                    name='currentSession'
                    className='input'
                  />
                </div>
              </div>
            </section>

            {/* Separator */}

            {/* Japanese Language Test (N5/N4) Section - Image 6 */}
            <section>
              <h2 className='px-3 py-2 mb-4 text-sm font-semibold text-white bg-gray-900 rounded-md sm:text-base'>
                Japanese Language Test (N5/N4)
              </h2>
              <div className='overflow-x-auto'>
                <table className='min-w-full bg-white border border-gray-200 rounded-md languageTest'>
                  <thead>
                    <tr className='text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50'>
                      <th className='px-6 py-3 border border-gray-200'>
                        Test Name
                      </th>
                      <th className='px-6 py-3 border border-gray-200'>
                        Score
                      </th>
                      <th className='px-6 py-3 border border-gray-200'>
                        Exam Date
                      </th>
                      <th className='px-6 py-3 border border-gray-200 whitespace-nowrap'>
                        Result Publish Date
                      </th>
                      <th className='px-6 py-3 border border-gray-200 whitespace-nowrap'>
                        Expected Exam Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {['JLPT', 'NAT', 'JLCT', 'J_Test', 'Top_J'].map(
                      (testName, index) => (
                        <tr key={testName}>
                          <td
                            className={`px-6 py-4 whitespace-nowrap ${
                              index < 4 ? 'border-b border-gray-200' : ''
                            }`}
                          >
                            <input
                              type='text'
                              value={testName.replace('_', '.')}
                              readOnly
                              className='input bg-gray-50 min-w-[80px]'
                            />
                          </td>
                          <td
                            className={`px-6 py-4 whitespace-nowrap ${
                              index < 4 ? 'border border-gray-200' : 'border'
                            }`}
                          >
                            <input
                              type='text'
                              name={`${testName}Score`}
                              className='input min-w-[80px]'
                            />
                          </td>
                          <td
                            className={`px-6 py-4 whitespace-nowrap ${
                              index < 4 ? 'border border-gray-200' : 'border'
                            }`}
                          >
                            <div className='relative'>
                              <input
                                type='date'
                                name={`${testName}ExamDate`}
                                placeholder='yyyy/mm/dd'
                                className='input pr-10 min-w-[120px]'
                              />
                            </div>
                          </td>
                          <td
                            className={`px-6 py-4 whitespace-nowrap ${
                              index < 4 ? 'border border-gray-200' : 'border'
                            }`}
                          >
                            <div className='relative'>
                              <input
                                type='date'
                                name={`${testName}ResultPublishDate`}
                                placeholder='yyyy/mm/dd'
                                className='input pr-10 min-w-[120px]'
                              />
                            </div>
                          </td>
                          <td
                            className={`px-6 py-4 whitespace-nowrap ${
                              index < 4 ? 'border border-gray-200' : 'border'
                            }`}
                          >
                            <div className='relative'>
                              <input
                                type='date'
                                name={`${testName}ExpectedExamDate`}
                                placeholder='yyyy/mm/dd'
                                className='input pr-10 min-w-[120px]'
                              />
                            </div>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Submit Button */}
            <div className='mt-8 text-center'>
              <button
                type='submit'
                className='px-6 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700'
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit Information'}
              </button>
            </div>
          </form>
        </section>

        <p className='p-3 mt-6 text-sm text-center text-red-600 border border-red-200 rounded-md bg-red-50'>
          বি.দ্র.: এই ফর্মটির সকল তথ্য অবশ্যই পূরণ করতে হবে। কোন কিছু না বুঝতে
          পারলে সংশ্লিষ্ট ব্যক্তির কাছ থেকে বুঝে নিতে হবে এবং সকল তথ্য ইংরেজিতে
          পূরণীয়।
        </p>
      </div>
    </div>
  );
};

export default StudentFullInformationForm;
