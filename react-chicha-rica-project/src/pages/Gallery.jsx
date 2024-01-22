import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import GalleryFilter from "../components/GalleryFilter"
import "../styles/Gallery.css"
import Modal from "../components/Modal"

function Gallery() {
  const navigate = useNavigate();
  const { category } = useParams();
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null)
  const [modal, setModal] = useState(false);
  const [containerRect, setContainerRect] = useState(null)
  const [filter, setFilter] = useState(category || "")
  const [searchTerm, setSearchTerm] = useState("")
  const [suggestions, setSuggestions] = useState([])

  const handleFilterChange = (newCategory) => {
    setFilter(newCategory)
    if (newCategory === "") {
      navigate("/gallery")
    } else {
      navigate(`/gallery/${newCategory}`)
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api.json");
        const dataApi = response.data;
        const filteredImages = dataApi.data.filter((image) => {
          const hasCategory = !filter || image.keyword.includes(filter);
          const matchesSearch = !searchTerm || image.title.toLowerCase().includes(searchTerm.toLowerCase());
          return hasCategory && matchesSearch;
        });
        setImages(filteredImages);
      } catch (error) {
        console.error("Error al obtener los datos de la API:", error);
        console.error("Error al obtener los datos de la API:", error);
      }
    };

    fetchData();

    const galleryContainer = document.querySelector(".gallery-container");
    setContainerRect(galleryContainer.getBoundingClientRect());

    const handleResize = () => {
      setContainerRect(galleryContainer.getBoundingClientRect());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [category, filter, searchTerm]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await axios.get(`/api/suggestions?searchTerm=${searchTerm}`);
        setSuggestions(response.data);
      } catch (error) {
        console.error("Error al obtener sugerencias:", error);
      }
    };
  
    fetchSuggestions();
  }, [searchTerm]);

  const handleMouseMove = (event) => {
    const mouseX = event.clientX - containerRect.left - containerRect.width / 2;
    const mouseY = event.clientY - containerRect.top - containerRect.height / 5;
    const rotateX = (mouseY / containerRect.height) * 3;
    const rotateY = (mouseX / containerRect.width) * 9;

    const imgContainers = document.querySelectorAll(".img-container");
    imgContainers.forEach((imgContainer) => {
      imgContainer.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    });
  };

  const resetRotation = () => {
    const imgContainers = document.querySelectorAll(".img-container");
    imgContainers.forEach((imgContainer) => {
      imgContainer.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    });
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModal(true);
    resetRotation();
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModal(false);
    resetRotation();
  };

  // const handleSuggestionClick = (selectedSuggestion) => {
  //   setSearchTerm(selectedSuggestion.title);
  //   // Realiza acciones adicionales si es necesario
  // };

  return (
    <>
    <div className="gallery-container" onMouseMove={handleMouseMove} onMouseLeave={resetRotation}>
      <GalleryFilter onFilterChange={handleFilterChange} />
      <div className="pictures-container">
        {Array.isArray(images) &&
          images.map((image) => (
            <div className={`${image.keyword}`} key={image.id} onClick={() => openModal(image)}>
              <div className="img-container">
                <img src={`img/${image.url}`} alt={image.title} />
              </div>
            </div>
          ))}
      </div>
      {modal && selectedImage && <Modal image={selectedImage} closeModal={closeModal} />}
    </div>
    </>
  );
}

export default Gallery;
