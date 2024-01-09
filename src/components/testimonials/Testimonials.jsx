// import React from 'react'
import "./testimonials.scss";
export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Erza Elizabeth",
      img: "https://img.freepik.com/premium-photo/digital-portrait-beautiful-face-illustration-beautiful-girl-beautiful-woman_769803-80.jpg",
      icon: "assets/twitter.png",
      desc: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      title: "Content Creator",
    },
    {
      id: 2,
      name: "Lucy Heartfilia ",
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ca439488-e5fa-4a39-806e-c7f3c3ecc7b9/dft22zi-b4cd20db-2d0b-4542-8c83-b2a311dd17d9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NhNDM5NDg4LWU1ZmEtNGEzOS04MDZlLWM3ZjNjM2VjYzdiOVwvZGZ0MjJ6aS1iNGNkMjBkYi0yZDBiLTQ1NDItOGM4My1iMmEzMTFkZDE3ZDkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.l7q05bPAgxnJ7auFMhfEORI1hy6lCq3luwLSKL-5iHU",
      icon: "assets/twitter.png",
      desc: "Six months of hardcore focus and alignment can put you ahead 5 years in life.",
      title: "Digital Marketing",
      featured: true,
    },
    {
      id: 3,
      name: "Nami",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbI0c_ueCpTRHGCuGfOdebIZakGDtuJi1KnGqoip90D0sTBcfZ15o5V4TWkDx0j03FCg8&usqp=CAU",
      icon: "assets/twitter.png",
      desc: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma.",
      title: "Graphic Designer",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d, index) => {
          return (
            <div key={index} className={d.featured ? "card featured" : "card"}>
              <div className="top">
                <img src="assets/right-arrow.png" className="left" alt="" />
                <img src={d.img} className="user" alt="" />
                <img src="assets/youtube.png" className="right" alt="" />
              </div>
              <div className="center">{d.desc}</div>
              <div className="bottom">
                <h3>{d.name}</h3>
                <h4>{d.title}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
