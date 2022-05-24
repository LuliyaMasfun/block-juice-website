import { Box } from "@chakra-ui/react"
import Image from "next/image";

const image = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;



export const Slideshow({ thumbImage }) => (
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <Box className="slideshow">
      <Box
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((Image, index) => (
          <Box
            className="slide"
            key={index}
            src={{ Image }}
          ></Box>
        ))}
      </Box>
    </Box>
  );
}

ReactDOM.render(<Slideshow />, document.getElementById("App"));