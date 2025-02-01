import { cn } from "@/lib/utils";

interface Props {
  title: string;
  subTitle?: string;
  titleStyle?: string;
  subTitleStyle?: string;
  containerStyle?: string;
}

const ComponentTitle = ({
  title,
  subTitle,
  titleStyle,
  subTitleStyle,
  containerStyle,
}: Props) => {
  return (
    <section className={cn("space-y-4 text-center", containerStyle)}>
      <h4
        className={cn(
          "text-[#2382f0] font-semibold text-sm lg:text-lg lg:tracking-wider",
          titleStyle
        )}
      >
        {title}
      </h4>
      {subTitle && (
        <h2
          className={cn(
            "text-[#0b305b] text-3xl font-semibold md:text-3xl lg:text-6xl lg:font-semibold xl:text-6xl",
            subTitleStyle
          )}
        >
          {subTitle}
        </h2>
      )}
    </section>
  );
};

export default ComponentTitle;
