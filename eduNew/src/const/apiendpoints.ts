const apiEndpoints = {
  auth: 'login',
  addCourse: '/course/add_course',
  addSubject: '/course/add_subject',
  getAllCourse: '/course/get_course',
  getSingleCourse: '/course/get_course',
  getAllSubject: '/course/get_course',
  addInstitute: '/institute/add_institute',
  getInstitutes: '/institute/get_institute',
  addBranch: '/institute/add_branch',
  addBatch: '/institute/add_batch',
  getBatchByIds: '/institute/get_batch',
  getBranchByInstitute: '/institute/get_branch',
  users: '/users',
  getUsersByBranch: '/users/get_users_by_branch',
  getAllAssignedList: '/institute/get_assign_teacher',
  getAssignedListbyIds: '/institute/get_assign_teacher',
  getDepartment: 'institute/get_department',
  getTransport: '/fms/get_transport  ',
  getHostel: '/fms/get_hostel  ',
  getUsersList: '/users/get_users',
  getFms: '/fms/get_fms',
  getFmsByCourse: '/fms/get_fms_by_course',
  updateFmsFee: '/users/update_users_fees',
  assignTeacher: '/institute/assign_teacher',
  assignLessonPlan: '/institute/lesson_plan',
  studentAttendance: '/institute/attendance',
  getStudentByBranch: '/users/get_student_by_branch',
  teacherAssignementPost: '/institute/assignment_teacher',
  getLearnSubjectLists: '/course/learn_module',
  studentGetAssignment: '/institute/get_assignment',
  studentGetCompletedAssignment: '/institute/get_assignment_student',
  studentUploadAssigment: '/institute/assignment_student',
  teacherInsDetails: '/institute/teacher_module',
  reviewAssignment: '/institute/review_assignment'
}

export default apiEndpoints
