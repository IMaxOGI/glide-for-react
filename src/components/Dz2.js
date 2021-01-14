import React, { useState } from "react";
import "../Dz2.css";
import Glide from "./Glide";
import {
  Checkbox,
  Container,
  Radio,
  Form,
  Input,
  Button,
} from "semantic-ui-react";

export default function Dz2() {
  const [autoplay, setAutoplay] = useState(false);
  const [type, setType] = useState("carousel");
  const [perView, setPerView] = useState(3);
  const [visible, setVisible] = useState(true);

  return (
    <Container className="dz2">
      <Form>
        <Form.Field>
          <Input
            value={perView}
            type="numeric"
            onChange={(e) => setPerView(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Autoplay"
            checked={autoplay}
            onChange={() => setAutoplay(!autoplay)}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="Carousel"
            name="type"
            value="carousel"
            checked={type === "carousel"}
            onChange={() => setType("carousel")}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="Slider"
            name="type"
            value="slider"
            checked={type === "slider"}
            onChange={() => setType("slider")}
          />
        </Form.Field>
      </Form>
      <Button onClick={() => setVisible(false)}>Remove Slider</Button>
      {visible && (
        <Glide options={{ autoplay: autoplay ? 2000 : false, type, perView }}>
          <img
            className="full-with-img"
            src="https://images.wallpaperscraft.ru/image/kot_kosmonavt_skafandr_130111_1920x1080.jpg"
            alt=""
          />
          <img
            className="full-with-img"
            src="https://images.wallpaperscraft.ru/image/kot_milyj_shar_127642_1920x1080.jpg"
            alt=""
          />
          <img
            className="full-with-img"
            src="https://images.wallpaperscraft.ru/image/kot_risunok_art_apofiss_94604_1920x1080.jpg"
            alt=""
          />
        </Glide>
      )}
    </Container>
  );
}
// class Dz2 extends Component {
//   state = {
//     autoplay: false,
//     type: "carousel",
//     perView: 3,
//     visible: true,
//   };

//   render() {
//     const { autoplay, type, perView } = this.state;
//     console.log(autoplay);
//     console.log(type);
//     console.log(perView);
//     return (
//       <Container className="dz2">
//         <Form>
//           <Form.Field>
//             <Input
//               value={perView}
//               type="numeric"
//               onChange={(e) => this.setState({ perView: e.target.value })}
//             />
//           </Form.Field>
//           <Form.Field>
//             <Checkbox
//               label="Autoplay"
//               checked={autoplay}
//               onChange={() => this.setState({ autoplay: !autoplay })}
//             />
//           </Form.Field>
//           <Form.Field>
//             <Radio
//               label="Carousel"
//               name="type"
//               value="carousel"
//               checked={type === "carousel"}
//               onChange={() => this.setState({ type: "carousel" })}
//             />
//           </Form.Field>
//           <Form.Field>
//             <Radio
//               label="Slider"
//               name="type"
//               value="slider"
//               checked={type === "slider"}
//               onChange={() => this.setState({ type: "slider" })}
//             />
//           </Form.Field>
//         </Form>
//         <Button onClick={() => this.setState({ visible: false })}>
//           Remove Slider
//         </Button>
//         {this.state.visible && (
//           <Glide options={{ autoplay: autoplay ? 2000 : false, type, perView }}>
//             <img
//               className="full-with-img"
//               src="https://images.wallpaperscraft.ru/image/kot_kosmonavt_skafandr_130111_1920x1080.jpg"
//               alt=""
//             />
//             <img
//               className="full-with-img"
//               src="https://images.wallpaperscraft.ru/image/kot_milyj_shar_127642_1920x1080.jpg"
//               alt=""
//             />
//             <img
//               className="full-with-img"
//               src="https://images.wallpaperscraft.ru/image/kot_risunok_art_apofiss_94604_1920x1080.jpg"
//               alt=""
//             />
//           </Glide>
//         )}
//       </Container>
//     );
//   }
// }

// export default Dz2;
