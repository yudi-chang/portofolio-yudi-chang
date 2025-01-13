import { Parallax } from "react-scroll-parallax";
import Container from "./Container";

const Illustration = () => {
  return (
    <div className="w-[300px] h-[600px] relative">
      <Parallax
        translateX={['-100px', '0px']}
        className="absolute z-10 top-[20%] left-0"
      >
        <i className="scale-[10] text-secondary fa-solid fa-database"/>
      </ Parallax>
      <Parallax
        translateX={['-50px', '0px']}
        className="absolute z-10 top-[60%] left-0"
      >
        <i className="scale-[10] text-secondary fa-sharp fa-solid fa-server"/>
      </ Parallax>

      <i className="absolute z-1 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-[15] text-[#ecf0f1] fa-solid fa-file-code"/>
      
      <Parallax
        translateX={['50px', '0px']}
        className="absolute z-10 top-[40%] right-0 "
      >
        <i className="scale-[10] text-secondary fa-brands fa-css"/>
      </Parallax>
      <Parallax
        translateX={['100px', '0px']}
        className="absolute z-10 top-[80%] right-0 "
      >
        <i className="scale-[10] text-secondary fa-brands fa-js"/>
      </Parallax>
    </div>
  )
}

export default function Skills() {
  return (
    <section>
      <Container>
        <div className="flex justify-between">
          <h3 className="font-bold">[Back_end]</h3>
          <Illustration />
          <h3 className="font-bold text-right">&lt;Front_end&gt;</h3>
        </div>
      </Container>
      <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
    </section>
  );
}