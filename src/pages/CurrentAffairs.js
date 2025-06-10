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
  Divider,
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const CurrentAffairs = () => {
  const currentAffairs = [
    {
      id: 1,
      title: 'Union Budget 2024 Highlights',
      description: 'Key points and analysis of the Union Budget 2024 and its impact on various sectors',
      date: 'Feb 1, 2024',
      category: 'Economy',
      image: 'https://img.freepik.com/free-photo/business-finance-employment-female-successful-entrepreneurs-concept_1258-80872.jpg',
      tags: ['Budget', 'Economy', 'Government'],
      readTime: '10 mins'
    },
    {
      id: 2,
      title: 'New Environmental Policy',
      description: 'Government announces new environmental protection measures and sustainability goals',
      date: 'Jan 28, 2024',
      category: 'Environment',
      image: 'https://img.freepik.com/free-photo/environmental-conservation-nature-clean-energy_1417-1324.jpg',
      tags: ['Environment', 'Policy', 'Sustainability'],
      readTime: '8 mins'
    },
    {
      id: 3,
      title: 'International Relations Update',
      description: 'Recent developments in India\'s foreign policy and international agreements',
      date: 'Jan 25, 2024',
      category: 'International',
      image: 'https://img.freepik.com/free-photo/medium-shot-people-shaking-hands_23-2149300663.jpg',
      tags: ['Foreign Policy', 'Diplomacy', 'International'],
      readTime: '12 mins'
    },
    {
      id: 4,
      title: 'Science & Technology Breakthroughs',
      description: 'Latest developments in science and technology sector in India',
      date: 'Jan 22, 2024',
      category: 'Science & Tech',
      image: 'https://img.freepik.com/free-photo/scientist-working-laboratory_23-2148846096.jpg',
      tags: ['Science', 'Technology', 'Innovation'],
      readTime: '15 mins'
    }
  ];

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Current Affairs
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Stay updated with the latest news and developments
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {currentAffairs.map((article) => (
          <Grid item key={article.id} xs={12} md={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="240"
                image={article.image}
                alt={article.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ mb: 2 }}>
                  <Chip
                    label={article.category}
                    color="primary"
                    size="small"
                    sx={{ mb: 1 }}
                  />
                  <Typography gutterBottom variant="h5" component="div">
                    {article.title}
                  </Typography>
                </Box>

                <Typography variant="body2" color="text.secondary" paragraph>
                  {article.description}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <CalendarTodayIcon sx={{ mr: 1 }} fontSize="small" color="action" />
                  <Typography variant="body2" color="text.secondary">
                    {article.date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mx: 2 }}>
                    •
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {article.readTime} read
                  </Typography>
                </Box>

                <Divider sx={{ my: 2 }} />

                <Box sx={{ mb: 2 }}>
                  {article.tags.map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}
                      size="small"
                      variant="outlined"
                      sx={{ mr: 1, mb: 1 }}
                    />
                  ))}
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mr: 1 }}
                  >
                    Read More
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<BookmarkIcon />}
                  >
                    Save
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

export default CurrentAffairs; 