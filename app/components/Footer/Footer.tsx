type FooterProps = {
  total: number;
  completed: number;
};
const Footer = ({ total, completed }: FooterProps) => {
  return (
    <footer className="flex justify-center items-center p-5 bg-[#CAFF00] w-full fixed bottom-0 ">
      <p className="text-[#151515] text-base font-bold max-xl:text-sm max-xl:text-center">
        {`You have ${total} items on your list and you already packed ${completed}`}
      </p>
    </footer>
  );
};
export default Footer;
