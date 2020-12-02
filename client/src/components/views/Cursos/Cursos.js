import React from "react";
import ReactPlayer from "react-player";

function Cursos() {
  return (
    <div style={{ float: "center" }}>
      <div id="cursos-Header">
        <h1>Cursos profesionales</h1>
      </div>
      <div>
        <div className="containerVideos">
          <form>
            <div className="mb-5 containerSerch serchCursos">
              <input
                type="text"
                name="search"
                className="form-control"
                placeholder="Busca un video"
              />
              <div className="spaceBetween"></div>
              <button
                className="border-0 rounded fas fa-search btn btn-info"
                type="submit"
              ></button>
            </div>
          </form>

          <h3 className="subtitle-Curse rounded text-center">Cocina Basica</h3>
          <div className="mb-5 cook-Curse">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=8QwxT3Kv_qk"
              className="react-player"
            />
            <ReactPlayer
              url="https://www.youtube.com/watch?v=8QwxT3Kv_qk"
              className="react-player"
            />
            <ReactPlayer
              url="https://www.youtube.com/watch?v=8QwxT3Kv_qk"
              className="react-player"
            />
            <ReactPlayer
              url="https://www.youtube.com/watch?v=8QwxT3Kv_qk"
              className="react-player"
            />
            <ReactPlayer
              url="https://www.youtube.com/watch?v=8QwxT3Kv_qk"
              className="react-player"
            />
            <ReactPlayer
              url="https://www.youtube.com/watch?v=8QwxT3Kv_qk"
              className="react-player"
            />
          </div>

          <br></br>
          <br></br>
          <h3 className="subtitle-Curse">Pasteleria</h3>
          <div className="mn-5 cook-Curse">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=8QwxT3Kv_qk"
              className="react-player"
            />
            <ReactPlayer
              url="https://www.youtube.com/watch?v=8QwxT3Kv_qk"
              className="react-player"
            />
            <ReactPlayer
              url="https://www.youtube.com/watch?v=8QwxT3Kv_qk"
              className="react-player"
            />
            <ReactPlayer
              url="https://www.youtube.com/watch?v=8QwxT3Kv_qk"
              className="react-player"
            />
            <ReactPlayer
              url="https://www.youtube.com/watch?v=8QwxT3Kv_qk"
              className="react-player"
            />
            <ReactPlayer
              url="https://www.youtube.com/watch?v=8QwxT3Kv_qk"
              className="react-player"
            />
          </div>
          <br></br>
          <br></br>
          <h3 className="mt-5 subtitle-Curse">Bartender</h3>
          <div className="cook-Curse">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=8QwxT3Kv_qk"
              className="react-player"
            />
            <ReactPlayer
              url="https://www.youtube.com/watch?v=8QwxT3Kv_qk"
              className="react-player"
            />
            <ReactPlayer
              url="https://www.youtube.com/watch?v=8QwxT3Kv_qk"
              className="react-player"
            />
            <ReactPlayer
              url="https://www.youtube.com/watch?v=8QwxT3Kv_qk"
              className="react-player"
            />
            <ReactPlayer
              url="https://www.youtube.com/watch?v=8QwxT3Kv_qk"
              className="react-player"
            />
            <ReactPlayer
              url="https://www.youtube.com/watch?v=8QwxT3Kv_qk"
              className="react-player"
            />
          </div>
          <br></br>
          <br></br>
          <h3 className="mt-5 subtitle-Curse">Trucos de cocina</h3>
          <div className="cook-Curse">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=8QwxT3Kv_qk"
              className="react-player"
            />
            <ReactPlayer
              url="https://www.youtube.com/watch?v=8QwxT3Kv_qk"
              className="react-player"
            />
            <ReactPlayer
              url="https://www.youtube.com/watch?v=8QwxT3Kv_qk"
              className="react-player"
            />
            <ReactPlayer
              url="https://www.youtube.com/watch?v=8QwxT3Kv_qk"
              className="react-player"
            />
            <ReactPlayer
              url="https://www.youtube.com/watch?v=8QwxT3Kv_qk"
              className="react-player"
            />
            <ReactPlayer
              url="https://www.youtube.com/watch?v=8QwxT3Kv_qk"
              className="react-player"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cursos;
