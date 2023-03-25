import { Card, CardContent, Typography } from '@mui/material';
import { Star } from '@mui/icons-material';
import { red, grey } from '@mui/material/colors';

const CourseCard = ({ imageSrc, title, author, rating, price, enrolledStudents }) => {
  const fallbackImgSrc = '/fallback.jpg';

  return (
    <Card className="shadow-lg rounded-lg overflow-hidden">
      <div className="relative h-0 pb-2/3">
        <img
          src={imageSrc}
          alt={title}
          className="absolute h-full w-full object-cover"
          onError={(e) => {
            e.target.src = fallbackImgSrc;
            e.target.onerror = null;
          }}
        />
      </div>
      <CardContent className="py-3">
        <Typography variant="subtitle1" color="textSecondary" className="mb-1">
          {author}
        </Typography>
        <Typography variant="h5" component="h2" className="mb-2">
          {title}
        </Typography>
        <div className="flex items-center mb-2">
          <Star fontSize="small" htmlColor={red[500]} />
          <Typography variant="body2" color="textSecondary" className="ml-1">
            {rating}
          </Typography>
          <Typography variant="body2" color="textSecondary" className="ml-2">
            ({enrolledStudents})
          </Typography>
        </div>
        <Typography variant="h6" component="h2" className="text-lg font-bold mb-1">
          {price}
        </Typography>
        <Typography variant="body2" color="textSecondary" className="uppercase">
          Enroll Now
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
