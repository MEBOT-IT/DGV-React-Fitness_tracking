import Link from "next/link";
import "./blog.css";
import Image from "next/image";
const Blogs = () => {
  return (
    <div className="blogs1">
      <Image
        className="fragment-of-saturn5"
        fill
        src="/grad.png"
      />
      <h1 className="our-blogs1" id="blogs">
        Our Blogs
      </h1>
      <Image
        className="sven-mieke-lx-gdv7va9m-unsplas-icon1"
        id="blogimg"
        width={599}
        height={130}
        src="/blog.png"
      />
      <h3 className="empowering-women-unveiling-container1" id="title">
        <p className="empowering-women-unveiling1">{`Empowering Women: Unveiling the Secrets to Achieving Fitness Goals `}</p>
        
      </h3>
      <p className="in-todays-fast-paced1" id="content">
        In today's fast-paced world, women are juggling multiple roles, from
        being career-driven professionals to loving mothers and dedicated
        partners. Amidst this busy lifestyle, prioritizing health and fitness
        often takes a back seat. However, it's essential to recognize that a
        healthy and fit body can empower women to excel in every aspect of life.
        In this blog, we'll explore the importance of female fitness and provide
        actionable tips to help women achieve their fitness goals.
      </p>
      <Link href={'/blogs'}>
        <button className="rm">Read More</button>
      </Link>
    </div>
  );
};

export default Blogs;
