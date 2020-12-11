import NotFound from './routes/NotFound.svelte'
import Signup from './components/User/Signup.svelte'
import About from './routes/About.svelte'
import Teachers from './routes/Teachers.svelte'
import Teacher from './routes/Teacher.svelte'
import TeacherCreate from './routes/dashboard/TeacherCreate.svelte'
import Classes from './routes/Classes.svelte'
import Class from './routes/Class.svelte'
import Schedule from './routes/Schedule.svelte'
import MatchMe from './routes/MatchMe.svelte'
import Home from './routes/Home.svelte'
import Map from './routes/Map.svelte'
import Dashboard from './routes/dashboard/Dashboard.svelte'

// https://github.com/ItalyPaleAle/svelte-spa-router
export default {

  '/': Home,

  '/user/signup': Signup,

  '/about': About,

  '/teachers/': Teachers,
  '/teacher/:id': Teacher,
  '/teacher-create/': TeacherCreate,

  '/classes/': Classes,
  '/class/:id/': Class,

  '/signup/:id': Signup,

  '/schedule/': Schedule,
  '/schedule/signup': Schedule,

  '/matchme/': MatchMe,

  '/map/': Map,

  '/dashboard/': Dashboard,

  // Catch-all - this is optional, but if present it must be the last
  '*': NotFound,
}
