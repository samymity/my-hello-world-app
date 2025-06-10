import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Box, Chip } from '@mui/material';

const Products = () => {
  const courses = [
    {
      id: 1,
      title: 'UPSC Preparation',
      description: 'Comprehensive course for UPSC Civil Services Examination',
      price: '₹15,999',
      duration: '12 months',
      image: 'https://img.freepik.com/free-photo/young-student-studying-library_23-2149215402.jpg',
      features: ['Video Lectures', 'Study Materials', 'Mock Tests', 'Expert Support']
    },
    {
      id: 2,
      title: 'Bank PO Course',
      description: 'Complete preparation for Banking examinations',
      price: '₹12,999',
      duration: '6 months',
      image: 'https://img.freepik.com/free-photo/banking-finance-elements_23-2150164874.jpg',
      features: ['Live Classes', 'Practice Questions', 'Previous Year Papers', 'Performance Analytics']
    },
    {
      id: 3,
      title: 'SSC Preparation',
      description: 'Structured course for Staff Selection Commission exams',
      price: '₹10,999',
      duration: '8 months',
      image: 'https://img.freepik.com/free-photo/young-people-studying-together_23-2149036905.jpg',
      features: ['Topic-wise Content', 'Daily Quizzes', 'Doubt Clearing', 'Mobile App Access']
    },
  ];

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Our Courses
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Choose from our wide range of exam preparation courses
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {courses.map((course) => (
          <Grid item key={course.id} xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={course.image}
                alt={course.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {course.description}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h6" color="primary">
                    {course.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Duration: {course.duration}
                  </Typography>
                </Box>
                <Box sx={{ mb: 2 }}>
                  {course.features.map((feature, index) => (
                    <Chip
                      key={index}
                      label={feature}
                      size="small"
                      sx={{ mr: 1, mb: 1 }}
                    />
                  ))}
                </Box>
                <Button variant="contained" color="primary" fullWidth>
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products; 