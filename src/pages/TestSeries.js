import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Chip,
  LinearProgress,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import QuizIcon from '@mui/icons-material/Quiz';

const TestSeries = () => {
  const testSeries = [
    {
      id: 1,
      title: 'UPSC Prelims Mock Tests',
      description: 'Comprehensive mock tests covering all UPSC Prelims subjects',
      questions: 100,
      duration: '2 hours',
      price: '₹999',
      image: 'https://img.freepik.com/free-photo/exam-test-questionnaire-quiz-concept_53876-124495.jpg',
      topics: ['General Studies', 'CSAT', 'Current Affairs'],
      attempted: 45
    },
    {
      id: 2,
      title: 'Bank PO Practice Tests',
      description: 'Full-length mock tests for Bank PO examination preparation',
      questions: 200,
      duration: '3 hours',
      price: '₹799',
      image: 'https://img.freepik.com/free-photo/woman-working-call-center_23-2148094886.jpg',
      topics: ['Quantitative Aptitude', 'Reasoning', 'English'],
      attempted: 75
    },
    {
      id: 3,
      title: 'SSC CGL Test Series',
      description: 'Topic-wise and full-length tests for SSC CGL preparation',
      questions: 150,
      duration: '2.5 hours',
      price: '₹699',
      image: 'https://img.freepik.com/free-photo/young-student-taking-test_23-2149318446.jpg',
      topics: ['Mathematics', 'General Intelligence', 'English Language'],
      attempted: 60
    }
  ];

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Test Series
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Practice with our comprehensive test series to enhance your exam preparation
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {testSeries.map((test) => (
          <Grid item key={test.id} xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={test.image}
                alt={test.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {test.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {test.description}
                </Typography>

                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <QuizIcon sx={{ mr: 1 }} fontSize="small" color="primary" />
                    <Typography variant="body2">
                      {test.questions} Questions
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <AccessTimeIcon sx={{ mr: 1 }} fontSize="small" color="primary" />
                    <Typography variant="body2">
                      Duration: {test.duration}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" gutterBottom>
                    Progress: {test.attempted}%
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={test.attempted} 
                    sx={{ mb: 2 }}
                  />
                </Box>

                <Box sx={{ mb: 2 }}>
                  {test.topics.map((topic, index) => (
                    <Chip
                      key={index}
                      label={topic}
                      size="small"
                      sx={{ mr: 1, mb: 1 }}
                    />
                  ))}
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                  <Typography variant="h6" color="primary">
                    {test.price}
                  </Typography>
                  <Button variant="contained" color="primary">
                    Start Test
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TestSeries; 