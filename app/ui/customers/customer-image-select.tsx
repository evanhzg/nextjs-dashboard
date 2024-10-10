import React, { useState, useEffect, useRef } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

interface CustomerImageSelectProps {
  onImageSelect: (imageSrc: string) => void;
}

export default function CustomerImageSelect({
  onImageSelect,
}: CustomerImageSelectProps) {
  const [selectedImage, setSelectedImage] = useState([]);
  const [customerImages, setCustomerImages] = useState([]);

  useEffect(() => {
    fetch('/api/customer-images')
      .then((response) => response.json())
      .then((data) => setCustomerImages(data))
      .catch((error) =>
        console.error('Error fetching customer images:', error),
      );
  }, []);

  return (
    <>
      <Stack direction="row" spacing={2}>
        {customerImages.map((image) => (
          <Avatar
            alt="Remy Sharp"
            src={image.src}
            key={image.name}
            sx={{
              border:
                selectedImage === image ? '3px solid rgb(0 112 243)' : 'none',
              cursor: 'pointer',
            }}
            onClick={() => {
              setSelectedImage(image);
              onImageSelect(image.src);
            }}
          />
        ))}
      </Stack>
    </>
  );
}
