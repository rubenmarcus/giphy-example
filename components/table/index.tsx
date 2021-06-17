import Image from 'next/image'

export default function GifTable({ ...props }) {

  const Component = ({ ...props }) =>
    props.gifs ? <GifsShow gifs={props.gifs} /> : <div>No Gif</div>;

  return (
    <>
      <Component gifs={props.gifs} />
    </>
  );
}

const GifsShow = ({ ...props }) => {
  const gifs = props.gifs.data;

  const myLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  return gifs ? (
    <div>
      {" "}
      {gifs.map((gif: any, i: number) => {
        return <Image key={i} width="auto" height="auto" loader={myLoader} src={gif.images.original.url} alt="" />;
      })}{" "}
    </div>
  ) : (
    <div>No Gif</div>
  );
};
