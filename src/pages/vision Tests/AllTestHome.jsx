import React from "react";
import EyeCheck from "../../assets/eyetests/doctor-testing-patient-eyesight.jpg";
import { Link } from "react-router-dom";

const diseases = [
  { path: "/myopia", name: "Myopia" },
  { path: "/near-sighted", name: "Hyperopia" },
  { path: "/color-blind", name: "Color Blindness" },
  { path: "/contrast-sensitvity", name: "Contrast Sensitivity" },
  { path: "/depth-precision", name: "Depth Precision" },
  { path: "/macular-degeneration", name: "Macular Degeneration" },
];

const AllTestHome = () => {
  const checkPhoto = EyeCheck;
  return (
    <div className="mx-auto max-w-2xl mt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-rows-2">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* left side */}
          <div>
            <div className="text-7xl">
              Tests for <br />{" "}
              <span className="text-[#004AAD]">Eye Diseases</span>
            </div>
            <div>
              <p className="font-bold text-xl mt-10 mb-10">In this section..</p>
              <p className="w-auto mr-16 mb-16">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
                id inventore repudiandae, ad nam mollitia expedita a maxime!
                Mollitia rerum, officiis soluta labore, tempore quasi deleniti
                id rem, similique ratione quisquam. Rerum ab, repellat accusamus
                commodi totam voluptates iusto unde voluptatum iure,
                necessitatibus eveniet odit ipsum ullam tempora inventore.
                Sequi?
              </p>
            </div>
          </div>
          {/* right side */}
          <div>
            <img
              src={checkPhoto}
              alt="doctor testing patient eyesight"
              className="w-auto"
            />
          </div>
        </div>
        {/* second row */}
        <div className="grid grid-cols-3 gap-4 ">
          {diseases.map((value, index) => (
            <div key={index}>
              <Link to={value.path}>
                <div>{value.name}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTestHome;
