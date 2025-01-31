interface Props {
  title: string;
  subTitle: string;
}

const ComponentTitle = ({ title, subTitle }: Props) => {
  return (
    <section className="space-y-4 text-center">
      <h4 className="text-[#2382f0] font-semibold text-sm lg:text-lg lg:tracking-widest">
        {title}
      </h4>
      <h2 className="text-[#0b305b] text-3xl font-semibold md:text-3xl lg:text-6xl lg:font-semibold xl:text-6xl">
        {subTitle}
      </h2>
    </section>
  );
};

export default ComponentTitle;
