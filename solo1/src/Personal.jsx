
import profile from './Profile.jpg'




function Info() {
    return (
        <>
            <div className='Personal'>

                <img className="profile" src={profile} alt="profile" />
                <h1>Richu Jomy</h1>
                <p className='pp'>Frontend Developer</p>
                <div className="contact-btns">
                   <a href="" className='btn-mail'>
                   <i class="fa fa-envelope"></i>
                    Email
                   </a>
                    <a href='www.google.com' className='btn-linkedin'>
                 <i class="fa fa-linkedin-square"></i>
                    Linkedin
                  </a>

                </div>
            </div>

        </>
    )
}


export default Info;