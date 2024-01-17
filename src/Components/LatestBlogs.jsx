import React from 'react'
import './LatestBlogs.css'

const LatestBlogs = () => {
  const blogData = [
    {id:1,img:"https://hairstyle.oceanwp.org/wp-content/uploads/2017/02/Sans-titre-1_0004_shutterstock_748817557-1-300x208.png",heading:"Duis Sagitis Ipsum Prasent",subHeading:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus…" ,linkData:"LEARN MORE" ,link:"https://hairstyle.oceanwp.org/duis-sagitis-ipsum-prasent/" },
    {id:2,img:"https://hairstyle.oceanwp.org/wp-content/uploads/2017/02/Sans-titre-1_0005_shutterstock_660561466-1-1024x711.png",heading:"Tortor neque adpiscing diam",subHeading:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus…" , linkData:"LEARN MORE" ,link:"https://hairstyle.oceanwp.org/tortor-neque-adpiscing-diam/" },
    {id:3,img:"https://hairstyle.oceanwp.org/wp-content/uploads/2017/02/Sans-titre-1_0003_shutterstock_1091285564-1-1024x711.png",heading:"Vestibulum sapin prin quam",subHeading:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus…" , linkData:"LEARN MORE" ,link:"https://hairstyle.oceanwp.org/vestibulum-sapin-prin-quam/" },
    {id:4,img:"https://hairstyle.oceanwp.org/wp-content/uploads/2017/02/Sans-titre-1_0002_shutterstock_1425214076-1-300x208.png",heading:"Neque adipiscing an cursus",subHeading:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus…" , linkData:"LEARN MORE" ,link:"https://hairstyle.oceanwp.org/neque-adipiscing-an-cursus/" },
    {id:5,img:"https://hairstyle.oceanwp.org/wp-content/uploads/2017/02/Sans-titre-1_0001_shutterstock_1715459824-1-300x208.png",heading:"Litora torqent per conubia",subHeading:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus…" , linkData:"LEARN MORE" ,link:"https://hairstyle.oceanwp.org/litora-torqent-per-conubia/" },
    {id:6,img:"https://hairstyle.oceanwp.org/wp-content/uploads/2017/02/Sans-titre-1_0000_shutterstock_1831638373-1-1024x711.png",heading:"Praesent libro se cursus ante",subHeading:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus…" , linkData:"LEARN MORE" ,link:"https://hairstyle.oceanwp.org/praesent-libro-se-cursus-ante/" },
  ]
  return (
    <div className='latest-blogs-wrapper'>
        <div className="blog-sub-heading">STAY UPDATED</div>
        <div className="blog-heading">LATEST NEWS</div>
        <div className="blog-data-wrapper">
          {blogData.map((data) => (
              <div className="blog-wrap" key={data.id}>
              <div className="blog-img"><img src={data.img} alt="" /></div>
              <div className="blog-data-wrap">
                <div className="data-heading">{data.heading}</div>
                <div className="data-sub-heading">{data.subHeading}</div>
                <a className='anchor' href={data.link} target='_blank' rel="noreferrer">{data.linkData}</a>
              </div>
            </div>
          ))
          }
        </div>
    </div>
  )
}

export default LatestBlogs