import {FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa6"


const Top = () => {
  return (
    <div className=" flex flex-col px-[4rem] max-400:px-[1rem]  max-590:px-[2rem]  max-740:px-[3rem] py-[3rem] gap-10 text-[#202020] " >
        <div className=" flex flex-col gap-5 " >
          <div className=" font-[quicksand] text-[#202020] font-[500] max-590:text-sm max-400:text-[0.7rem] underline underline-offset-4 " >That's all for now</div>
          <h1 className="text-3xl max-400:text-xl max-400:font-bold max-590:text-[1.7rem] max tracking-wider leading-relaxed max-800:leading-tight font-semibold font-[quicksand] " >Got a project in mind? <br />
          Let’s talk.</h1>
        </div>
        <hr className="border-[#808080]  mt-2 " />
        <div className=" flex justify-between max-590:flex-col gap-y-5" >
          <div className=" flex flex-col " >
            <h3 className=" text-sm font-[500] font-[quicksand]  tracking-tight " >E-mail Address:</h3>
            <a className=" font-[quicksand] font-bold tracking-wide " href= "https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtMnZtzvbwbKclpnDgGtwxcwdZxlSJJKRXWfcSgQlMZSJhpbbfVMlnqtPRJlcNTxwphwmkxv" target="_blank" >Sairash7248@gmail.com</a>
          </div>
          <div className=" flex flex-col " >
            <h3 className=" text-sm font-[500] font-[quicksand]  tracking-tight " >Phone Number</h3>
            <a className=" font-[quicksand] font-bold tracking-wide  " href="tel:+9779825920250" target="_blank"> (+977) 9825920250 </a>
          </div>
          <div className=" flex flex-col " >
            <h3 className=" text-sm font-[500] font-[quicksand] tracking-tight " >Social:</h3>
            <div className="flex gap-2" >
              <a href="https://linkedin.com/in/sairash-khatiwada" target="_blank" > <FaLinkedin className="text-xl  hover:text-[1.5rem ] text-[#0077B5] " /> </a>
              <a href="https://github.com/sairash00" target="_blank" > <FaGithub className="text-xl hover:text-[1.5rem ]  text-[#000] " /> </a>
              <a href="https://instagram.com/sairash_khatiwada" target="_blank" > <FaInstagram className=" text-xl  hover:text-[1.5rem ] " /> </a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Top