import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

const Home = () => {
  const featuredCourses = [
    {
      id: 1,
      title: 'UPSC Preparation',
      description: 'Comprehensive course for UPSC Civil Services Examination',
      image: 'https://img.freepik.com/free-photo/young-student-studying-library_23-2149215402.jpg',
    },
    {
      id: 2,
      title: 'Bank PO Course',
      description: 'Complete preparation for Banking examinations',
      image: 'https://img.freepik.com/free-photo/banking-finance-elements_23-2150164874.jpg',
    },
  ];

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to Exam Courses
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Your one-stop destination for exam preparation materials and courses
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Featured Courses
        </Typography>
        <Grid container spacing={4}>
          {featuredCourses.map((course) => (
            <Grid item key={course.id} xs={12} md={6}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={course.image}
                  alt={course.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {course.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {course.description}
                  </Typography>
                  <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home; 