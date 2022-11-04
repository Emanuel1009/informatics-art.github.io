import Comments from "../../components/Comments";
import Header from "../../components/Header";
import Slideshow from "../../components/SlideShow";

export default function Techno1() {
  return (
    <>
      <div>
        <Header />
        <div>
          <div className="py-6 px-6">
            <p className="font-['Poppins'] text-xl text-justify px-4">
              <img
                src="luffy.png"
                className="float-left w-[210px] mr-4 h-[210] rounded-[10px]"
              />
              <h2 className="text-4xl font-['Montserrat'] mb-4">
                Emanuel Amstrong
              </h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              accumsan sapien id ante convallis condimentum. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Nullam mattis
              finibus odio venenatis ullamcorper. Maecenas elementum, purus at
              consequat congue, mi ipsum auctor felis, eu malesuada tortor
              mauris quis mauris. Sed aliquam sollicitudin elit sit amet
              tincidunt. Vestibulum a gravida elit. Sed bibendum augue risus, id
              fringilla elit euismod et. Quisque in neque vel lectus fermentum
              luctus ullamcorper in dolor. Suspendisse venenatis non turpis sed
              dignissim. Nulla vitae odio auctor, consectetur magna in, euismod
              mauris. Vivamus nec bibendum mauris. Mauris et odio at ex
              facilisis pretium. Suspendisse faucibus magna eget urna viverra,
              vel bibendum dui lobortis. Aenean eu feugiat nisl. Integer ex
              orci, luctus quis urna nec, vulputate egestas ante. Quisque vel
              feugiat eros. Pellentesque semper dolor elementum mi pellentesque
              rhoncus vulputate eget nibh. Ut ac viverra nunc, in gravida nisl.
              Ut ac luctus nunc. Vestibulum fermentum dui sed mauris fringilla
              egestas. Duis vitae lobortis sapien. Cras elementum mattis tortor,
              nec tempus quam dignissim eu. Curabitur varius urna et turpis
              aliquam, ut venenatis dolor feugiat. Donec quis tortor erat. Nunc
              sagittis purus quis iaculis pulvinar. Cras consequat eget mi nec
              dignissim.
            </p>
          </div>
          <div className="ml-[70px]">
            <img
              src="zoro.jpg"
              className="float-left w-[1200px] mr-4 h-[453px] rounded-[10px]"
            />
          </div>
        </div>
      </div>
      <button className="w-[100px] btn bg-sky-400 border-none mt-4 ml-8">
        Download
      </button>
      <div>
        <div>
          <div className="border-black border-[1px] border-opacity-40 rounded-[10px] w-[1000px] h-[450px] mb-6 ml-[150px] mt-6">
            <h1 className="font-[Open Sans] font-semibold text-[18px] pr-3 ml-4">
              <p className="flex border-b w-[900px] items-center py-2 border-black mb-auto text-black font-semibold ml-4 mt-2">
                <span>Komentar</span>
              </p>
            </h1>
            <Comments />
            <Comments />
            <Comments />
          </div>
        </div>
      </div>
    </>
  );
}
