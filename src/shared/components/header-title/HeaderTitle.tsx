type HeaderTitleProps = {
  title: string;
};
function HeaderTitle({ title }: HeaderTitleProps) {
  return (
    <h1 className="font-semibold text-[2.5rem] leading-[3.0256rem] -tracking-[3%] text-foreground">
      {title}
    </h1>
  );
}

export default HeaderTitle;
