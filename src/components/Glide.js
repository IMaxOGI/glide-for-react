import React, { useEffect, useRef } from "react";
import GlideJs from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

export default function Glide(props) {
  const slider = useRef();
  const glider = useRef(null);

  useEffect(() => {
    glider.current = new GlideJs(slider.current, props.options).mount();
    // console.log(glider);
    // console.log(glider.current);
    return () => {
      glider.current.destroy();
    };
  }, [props.options]);

  return (
    <div ref={slider} className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {props.children.map((img, i) => (
            <li className="glide__slide" key={i}>
              {img}
            </li>
          ))}
        </ul>
      </div>
      <div className="glide__arrows" data-glide-el="controls">
        <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
          prev
        </button>
        <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
          next
        </button>
      </div>
    </div>
  );
}

// export default class Glide extends Component {

//     constructor(props) {
//         super(props);
//         this.slider = React.createRef();
//         this.glider = null;
//     }

//     componentDidMount() {
//         this.glider = new GlideJs(this.slider.current, this.props.options).mount()
//         console.log(this.props.options, this.glider)
//     }

//     componentDidUpdate(prevProps) {
//         if(this.props.options !== prevProps.options) {
//             this.glider.update(this.props.options)
//         }
//     }

//     componentWillUnmount() {
//         this.glider.destroy()
//     }

//     render() {
//         const { children } = this.props;
//         return (
//             <div ref={this.slider} className="glide">
//                 <div className="glide__track" data-glide-el="track">
//                     <ul className="glide__slides">
//                         {children.map(img =>  <li className="glide__slide">{img}</li>)}
//                     </ul>
//                 </div>
//                 <div className="glide__arrows" data-glide-el="controls">
//                     <button className="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
//                     <button className="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
//                 </div>
//             </div>
//         )
//     }
// }
