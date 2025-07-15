import React, { useEffect } from "react";
import usePhotoStore from "../stores/PhotoStore";

const Photo = () => {
  const { photos, searchQuery, setPhotos, setQuery } = usePhotoStore(
    (store) => store
  );

  const fetchPhotos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    setPhotos(data);
  };
  useEffect(() => {
    fetchPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(searchQuery);

  return (
    <React.Fragment>
      <form action="">
        <input
          type="text"
          name="query"
          id=""
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <section className="grid grid-cols-4 gap-4 mx-auto w-11/12 ">
        {photos &&
          photos.slice(0, 10).map((p) => {
            return (
              <div key={p.id}>
                <img src={p.url} className="w-40 h-40 object-cover" />
              </div>
            );
          })}
      </section>
    </React.Fragment>
  );
};

export default Photo;
