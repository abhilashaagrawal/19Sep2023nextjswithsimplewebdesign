//1 Import Area
import Header from './components/Header';
import Aside from './components/Aside';
import Section from './components/Section';
import Footer from './components/Footer';
//2 function defination Area
function Home() {
  return (
    <>
      <Header />
      <main>
        <Aside />
        <Section />
      </main>
      <Footer />
    </>
  )
}
//3 export area
export default Home;