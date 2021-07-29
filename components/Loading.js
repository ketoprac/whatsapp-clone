import { ThreeBounce } from "better-react-spinkit";

function Loading() {
  return (
    <center style={{display: "grid", placeItems: "center", height: "100vh"}}>
      <div>
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
          alt="Whatsapp Clone"
          height={200}
          width={200}
          style={{ marginBottom: 10}}
        />
        <br />
        <ThreeBounce scaleStart={0.4} color="lightgray"/>
      </div>
    </center>
  )
}

export default Loading;