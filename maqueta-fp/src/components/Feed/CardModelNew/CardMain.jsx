import React from 'react';
import { Avatar, Box, CardContent, CardHeader, Checkbox, Link, Typography } from '@mui/material';
import { ButtonPer, CardContainer, CardPer } from './CardS.style';
import { Bookmark, BookmarkBorder, Directions } from '@mui/icons-material';
import profileImg from '../../../img/profile-default.jpg';
import useUser from '../../../hook/useUser';
import PopupNoLogged from './PopupNoLogged';
import PopupNoLoggedSave from './PopupNoLoggedSave';
import ImagesCard from './ImagesCard';

const CardMain = ({ routes }) => {
  const { isLogged } = useUser();

  return (
    <>
      {routes.map((item, index) => (
        <CardPer key={index}>
          <CardHeader
            disableTypography
            sx={{
              backgroundColor: { xs: 'primary.main', md: 'secondary.main' },
              color: 'white.main'
            }}
            avatar={<Avatar src={profileImg}></Avatar>}
            title={
              <Typography
                component="p"
                variant="p"
                sx={{
                  fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1rem' },
                  fontWeight: '800',
                  fontFamily: 'Raleway'
                }}
              >
                {item.title}
              </Typography>
            }
            subheader={
              <Typography
                component="p"
                variant="p"
                sx={{
                  color: 'white.main',
                  fontFamily: 'Nunito Sans',
                  fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.8rem' }
                }}
              >
                {item.city}, {item.country}
              </Typography>
            }
          />

          <ImagesCard />

          <CardContent sx={{ backgroundColor: '#fff', height: '20vh', overflowY: 'auto' }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: { sm: '15px', md: '15px', lg: '18px' },
                paddingX: { xs: '0px', sm: '8px', lg: '20px' }
              }}
            >
              {item.description}
            </Typography>
          </CardContent>

          <CardContent
            sx={{
              backgroundColor: '#fff',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingX: { lg: '30px' }
            }}
          >
            <Typography
              fontStyle="italic"
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: { sm: '15px', md: '15px', lg: '18px' },
                fontWeight: '700'
              }}
            >
              Route`s Type:{' '}
              <Typography variant="spam" fontStyle="italic">
                {item.type}.
              </Typography>{' '}
              <Typography variant="spam">{item.distance} Km</Typography>
            </Typography>
            <Typography
              color="text.secondary"
              variant="body2"
              sx={{
                fontSize: { sm: '15px', md: '15px', lg: '18px' },
                fontWeight: '700'
              }}
            >
              {item.created_at}
            </Typography>
          </CardContent>

          <CardContainer disableSpacing>
            <Box sx={{ display: 'flex' }}>
              {isLogged ? (
                <ButtonPer
                  startIcon={
                    <Checkbox
                      sx={{ padding: '0px' }}
                      icon={<BookmarkBorder sx={{ color: 'white.main' }} />}
                      checkedIcon={<Bookmark sx={{ color: 'yellow' }} />}
                    />
                  }
                >
                  Save
                </ButtonPer>
              ) : (
                <PopupNoLoggedSave />
              )}
            </Box>

            <Box sx={{ display: 'flex' }}>
              {isLogged ? (
                <ButtonPer startIcon={<Directions sx={{ color: 'white.main' }} />}>
                  <Link href={`${item.url}`} target="_blank" rel="noopener">
                    Go to map
                  </Link>{' '}
                </ButtonPer>
              ) : (
                <PopupNoLogged />
              )}
            </Box>
          </CardContainer>
        </CardPer>
      ))}
    </>
  );
};

export default CardMain;
