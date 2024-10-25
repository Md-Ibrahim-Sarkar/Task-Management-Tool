
import Banner from "../sections/banner/Banner";
import Footer from "../sections/footer/Footer";
import Header from "../sections/header/Header";
import TaskTable from "../sections/task-table/TaskTable";


function Layout() {

  return (
    <div className="px-3">
      <Header />
      <Banner />
      <TaskTable />
      <Footer />
    </div>
  )
}

export default Layout