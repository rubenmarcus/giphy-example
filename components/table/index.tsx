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

  return gifs ? (
    <div>
      {" "}
      {gifs.map((gif: any, i: number) => {
        return <Image key={i} src={gif.images.original.url} alt="" />;
      })}{" "}
    </div>
  ) : (
    <div>No Gif</div>
  );
};
