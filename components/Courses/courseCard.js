import { Card, CardActionArea, CardContent, Typography, Box, Chip } from '@mui/material';
import { Star } from '@mui/icons-material';
import { red, grey, yellow } from '@mui/material/colors';

const CourseCard = ({ imageSrc, title, author, rating, price, enrolledStudents, category }) => {
  const fallbackImgSrc = '/fallback.jpg';

  return (
    <Card className="rounded-md overflow-hidden  hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 ease-in-out" style={{boxShadow:"none",}}>
      <CardActionArea >
        <div className="relative h-48">
          <img
            src={imageSrc}
            alt={title}
            className="absolute h-full w-full object-cover z-0"
            onError={(e) => {
              e.target.src = fallbackImgSrc;
              e.target.onerror = null;
            }}
          />
          <Box
            className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"
            sx={{ opacity: 0.3 }}
          />
          <Box className="absolute bottom-0 left-0 z-20 px-4 py-3">



          </Box>
        </div>
        <CardContent className="p-3">
          <div className="flex items-center mb-2">
            <Chip label={category} size="small" className="text-xs font-medium mr-2 bg-primary text-white" />
          </div>
          <Typography variant="body1" className="text-black font-semibold  truncate">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" className="text-gray-600 mt-1 font-[100] text-[12px]">
            {author}
          </Typography>

          <div className="flex items-center text-white mt-1">
            <Star fontSize="small" htmlColor={yellow[900]} />
            <Typography variant="body2" color="textSecondary" className="ml-1">
              {rating}
            </Typography>
            <Typography variant="body2" color="textSecondary" className="mx-1">
              •
            </Typography>
            <Typography variant="body2" color="textSecondary" className="mr-2">
              {enrolledStudents} students
            </Typography>
          </div>

          <Typography variant="h6" component="h2" className="text-black font-bold mt-2">
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CourseCard;
