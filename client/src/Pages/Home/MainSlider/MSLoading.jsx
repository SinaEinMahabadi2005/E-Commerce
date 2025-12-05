import { Box, Skeleton, Stack } from "@mui/material";

export default function MSLoading() {
  return (
    <Box
      sx={{
        height: "70vh",
        width: "90%",
        margin: "48px auto",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 0 5px 2px rgba(0,0,0,0.1)",
        position: "relative",
      }}
    >
      {/* Main image skeleton */}
      <Skeleton
        variant="rectangular"
        width="100%"
        height="100%"
        sx={{ 
          borderRadius: "16px",
        }}
      />
      
      {/* Text overlay skeleton */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Skeleton
          variant="rectangular"
          width={200}
          height={40}
          sx={{
            borderRadius: "8px",
            backdropFilter: "blur(5px)",
          }}
        />
      </Box>

      {/* Pagination dots skeleton */}
      <Box
        sx={{
          position: "absolute",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 1,
        }}
      >
        {[1, 2, 3].map((dot) => (
          <Skeleton
            key={dot}
            variant="circular"
            width={12}
            height={12}
          />
        ))}
      </Box>

      {/* Navigation arrows skeleton */}
      <Skeleton
        variant="circular"
        width={40}
        height={40}
        sx={{
          position: "absolute",
          top: "50%",
          left: 16,
          transform: "translateY(-50%)",
        }}
      />
      <Skeleton
        variant="circular"
        width={40}
        height={40}
        sx={{
          position: "absolute",
          top: "50%",
          right: 16,
          transform: "translateY(-50%)",
        }}
      />
    </Box>
  );
}