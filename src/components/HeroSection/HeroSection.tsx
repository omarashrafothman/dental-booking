import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section
            className="container-fluid d-flex align-items-center text-black"
            style={{ minHeight: "calc(100vh - 92px)" }}
        >
            <div className="row align-items-center w-100">

                <div
                    className="d-block d-lg-none position-absolute top-0 start-0 w-100 h-100"
                    style={{ filter: "blur(8px)", zIndex: -1 }}
                >
                    <Image
                        src="https://assets.website-files.com/60e4a233ef2c63474dd2a3e0/60e4a233ef2c63730fd2a41a_image-home-hero-dentist-template.jpg"
                        alt="Dentistry Clinic"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>


                <div
                    className="col-12 d-block d-lg-none text-center text-white position-relative ml-2"
                    style={{
                        background: "rgba(0,0,0,0.1)",
                        padding: "20px",
                        borderRadius: "10px",
                    }}
                >
                    <h1 className="fw-bold">
                        A <span className="text-primary">dentistry clinic</span> you can trust
                    </h1>
                    <p className="text-light">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit velit, sapien habitant integer senectus malesuada ac.
                    </p>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary me-3">Book an Appointment</button>
                        <Link href="#" className="btn btn-outline-light text-decoration-none">Browse Services</Link>
                    </div>
                </div>


                <div className="col-lg-6 text-center text-lg-start d-none d-lg-block">
                    <h1 className="fw-bold">
                        A <span className="text-primary">dentistry clinic</span> you can trust
                    </h1>
                    <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit velit, sapien habitant integer senectus malesuada ac.
                    </p>
                    <div className="d-flex justify-content-center justify-content-lg-start">
                        <button className="btn btn-primary me-3">Book an Appointment</button>
                        <button className="btn btn-outline-primary">Browse Services</button>
                    </div>
                </div>


                <div className="col-lg-6 d-flex justify-content-center d-none d-lg-block">
                    <div className="position-relative w-100" style={{ height: "100vh" }}>
                        <Image
                            src="https://assets.website-files.com/60e4a233ef2c63474dd2a3e0/60e4a233ef2c63730fd2a41a_image-home-hero-dentist-template.jpg"
                            alt="Dentistry Clinic"
                            layout="fill"
                            objectFit="cover"
                            className="rounded"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;
