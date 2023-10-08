import Image from "next/image";

interface FeatureCardProps {
  data: {
    img: string;
    heading: string;
    paragraph: string;
  };
}

interface FeatureProps {
  data: {
    id: string,
    text: {
      heading: string,
      list: string[],
    },
    img: string,
    color: string,
    reverse?: boolean,
  }
}

export const Feature = ({ data }: FeatureProps) => {
  const newList: any = [];
  data.text.list.forEach((list, i) =>
    newList.push(
      <li className="flex w-full text-lg gap-[10px]" key={i}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          fill="none"
        >
          <path
            fill={data.color}
            d="M9.752 3.137V8.24l-4.42-2.552-2.25 3.899 4.42 2.55-4.42 2.55 2.25 3.898 4.42-2.552v5.104h4.5v-5.104l4.42 2.552 2.25-3.898-4.42-2.55 4.42-2.55-2.25-3.899-4.42 2.552V3.137h-4.5Zm1.5 1.5h1.5v6.202l5.37-3.101.75 1.297-5.37 3.102 5.37 3.101-.75 1.297-5.37-3.1v6.202h-1.5v-6.203l-5.37 3.101-.75-1.297 5.37-3.101-5.37-3.102.75-1.297 5.37 3.101V4.637Z"
          ></path>
        </svg>
        {list}
      </li>
    )
  );

  return (
    <div className="mb-[160px]">
      <div
        className={`flex flex-col items-center gap-[70px] lg-1150:gap-[100px] ${
          data.reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="flex-1">
          <Image width={635} height={377} src={data.img} alt={data.text.heading} />
        </div>
        <div className="lg-1150:w-485px flex flex-col gap-[24px] flex-1">
          <h3 className="text-2xl leading-[31px] font-bold md:text-4xl md:leading-[47px]">
            {data.text.heading}
          </h3>
          <ul className="text-lg leading-[23px] md:text-[20px] md:leading-[26px] font-normal flex flex-col gap-[20px]">
            {newList}
          </ul>
        </div>
      </div>
    </div>
  );
};

export const FeatureCard = ({ data }: FeatureCardProps) => {
  return (
    <div className="bg-[#f8f9f9] flex flex-col gap-[50px] py-[40px] px-[30px] runded-[3px]">
      <Image
        width={330}
        height={165}
        className="object-contain aspect-[2/1]"
        src={data.img}
        alt={data.heading}
      />
      <div>
        <h3 className="text-lg leading-4 mb-[10px] font-bold">
          {data.heading}
        </h3>
        <p className="text-sm leading-[18px] font-normal text-[rgba(0,0,0,.5)]">
          {data.paragraph}
        </p>
      </div>
    </div>
  );
};
