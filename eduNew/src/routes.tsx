import { Switch, Route } from 'react-router-dom'
import ROUTES from './const/routes'
import Login from './container/Login'
import ProtectedRoute from './container/ProtectedRoute'
import {
  AddCourse,
  AddSubject,
  AddChapter,
  Course,
  DashBoard,
  Subjects,
  ViewSubs,
  InstitutesList,
  AddInstitutes,  
  AddBatch,
  AddBranch,
  Batch,
  Branch, 
  AssignTeacher,
  LessonPalne,
  AssignedTeacherList,
  AssignLesson,
  StudentAttendence,
  TeacherDateSelector,
  TeacherAttendence, 
  StudentDateSelector,
  StaffDateSelector,
  StaffAttendence,  
  AddAcademicCalendar, 
  ViewInstitute,
  ViewBranch, 
  AddTestName,
  AddTestType,
  AddTestComponent,
  AddTestInstruction,
  MarkSetting,
  InstitiuteTestSetting, 
  QrCodeSetting,
  LearnModuleSetting,
  Settings
} from './pages'

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.LOGIN} component={Login} />
      <ProtectedRoute path={ROUTES.DASHBOARD} component={DashBoard} />
      <ProtectedRoute path={ROUTES.COURSE} component={Course} />
      <ProtectedRoute path={ROUTES.ADD_COURSE} component={AddCourse} />
      <ProtectedRoute path={ROUTES.SUBJECTS} component={Subjects} />
      <ProtectedRoute path={ROUTES.ADD_SUBJECT} component={AddSubject} />
      <ProtectedRoute path={ROUTES.ADD_CHAPTER} component={AddChapter} />
      <ProtectedRoute path={ROUTES.VIEW_SUBS} component={ViewSubs} />
      <ProtectedRoute path={ROUTES.INSTITUTES} component={InstitutesList} />
      <ProtectedRoute path={ROUTES.ADD_INSTITUTE} component={AddInstitutes} /> 
      <ProtectedRoute path={ROUTES.BRANCH} component={Branch} />
      <ProtectedRoute path={ROUTES.ADD_BRANCH} component={AddBranch} />
      <ProtectedRoute path={ROUTES.BATCH} component={Batch} />
      <ProtectedRoute path={ROUTES.ADD_BATCH} component={AddBatch} /> 
      <ProtectedRoute path={ROUTES.ASSIGN_TEACHER} component={AssignTeacher} />
      <ProtectedRoute path={ROUTES.LESSON_PLANE} component={LessonPalne} />
      <ProtectedRoute path={ROUTES.EDIT_INSTITUTE} component={AddInstitutes} />
      <ProtectedRoute path={ROUTES.EDIT_BATCH} component={AddBatch} />
      <ProtectedRoute path={ROUTES.EDIT_BRANCH} component={AddBranch} />
      <ProtectedRoute path={ROUTES.ASSIGN_LESSON} component={AssignLesson} />
      <ProtectedRoute
        path={ROUTES.STUDENT_ATTENDENCE}
        component={StudentAttendence}
      />
      <ProtectedRoute
        path={ROUTES.ASSIGNED_TEACHER_LIST}
        component={AssignedTeacherList}
      />
      <ProtectedRoute
        path={ROUTES.STUDENT_DATE_SELECTOR}
        component={StudentDateSelector}
      />
      <ProtectedRoute
        path={ROUTES.TEACHER_DATE_SELECTOR}
        component={TeacherDateSelector}
      />
      <ProtectedRoute
        path={ROUTES.TEACHER_ATTENDENCE}
        component={TeacherAttendence}
      /> 
      <ProtectedRoute
        path={ROUTES.STAFF_DATE_SELECTOR}
        component={StaffDateSelector}
      />
      <ProtectedRoute
        path={ROUTES.STAFF_ATTENDENCE}
        component={StaffAttendence}
      />      
      <ProtectedRoute
        path={ROUTES.ADD_ACADEMIC_CALENDAR}
        component={AddAcademicCalendar}
      />  
      <ProtectedRoute path={ROUTES.VIEW_INSTITUTE} component={ViewInstitute} />
      <ProtectedRoute path={ROUTES.VIEW_BRANCH} component={ViewBranch} />    
      <ProtectedRoute path={ROUTES.ADD_TEST_NAME} component={AddTestName} />
      <ProtectedRoute path={ROUTES.ADD_TEST_TYPE} component={AddTestType} />
      <ProtectedRoute
        path={ROUTES.ADD_TEST_COMPONENT}
        component={AddTestComponent}
      />
      <ProtectedRoute
        path={ROUTES.ADD_TEST_INSTRUCTION}
        component={AddTestInstruction}
      />
      <ProtectedRoute path={ROUTES.MARK_SETTING} component={MarkSetting} />
      <ProtectedRoute
        path={ROUTES.INSTITUTE_TESTSETTING}
        component={InstitiuteTestSetting}
      />  
      <ProtectedRoute path={ROUTES.QRCODE_SETTINGS} component={QrCodeSetting} />
      <ProtectedRoute
        path={ROUTES.LEARN_MODULE_SETTINGS}
        component={LearnModuleSetting}
      />
      <ProtectedRoute path={ROUTES.LEARN_SETTINGS} component={Settings} />
    </Switch>
  )
}

export default Routes
