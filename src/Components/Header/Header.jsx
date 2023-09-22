import profile from '../../assets/images/profile.avif'
const Header = () => {
  return (
    <div className='flex justify-between p-4 w-10/12 mx-auto border-b-2 items-center'>
      <h3 className="text-3xl text-black font-medium">Knowledge cafe</h3>
      <img src={profile} className='rounded-full' style={{width:"60px", height:"60px"}}></img>
    </div>
  );
};

export default Header;