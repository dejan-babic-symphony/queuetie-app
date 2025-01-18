import {
  Avatar,
  Badge,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  Collapse,
  Divider,
  IconButton,
  Slider,
  Stack,
  Switch,
  Typography,
} from '@mui/material';
import NotificationIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import SendIcon from '@mui/icons-material/Send';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import InfoIcon from '@mui/icons-material/Info';
import { GadgetProps } from './types';
import { useState } from 'react';

export const Gadget: React.FC<GadgetProps> = () => {
  const [expand, setExpand] = useState<boolean>(false);

  return (
    <>
      <Card sx={{ width: 345 }}>
        <CardHeader
          avatar={<Avatar aria-label="recipe">DB</Avatar>}
          title="Dejan Babic"
          subheader="Symphony"
          action={
            <IconButton aria-label="settings">
              <Badge badgeContent={0} max={99} color="primary">
                <NotificationIcon />
              </Badge>
            </IconButton>
          }
        />
        <CardContent>
          <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
            <MessageIcon color="action" />
            <Typography variant="body2">This is the last message received</Typography>
          </Stack>
          <Stack direction="row" spacing={3} sx={{ alignItems: 'center', my: 4 }}>
            <Box
              sx={{
                position: 'relative',
                display: 'inline-flex',
                border: 'InfoBackground',
                alignContent: 'center',
              }}
            >
              <CircularProgress variant="determinate" value={10} />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  variant="caption"
                  component="div"
                  sx={{ color: 'text.secondary' }}
                >{`${Math.round(10)}%`}</Typography>
              </Box>
            </Box>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress variant="determinate" value={30} />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  variant="caption"
                  component="div"
                  sx={{ color: 'text.secondary' }}
                >{`${Math.round(30)}%`}</Typography>
              </Box>
            </Box>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress variant="determinate" value={50} />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  variant="caption"
                  component="div"
                  sx={{ color: 'text.secondary' }}
                >{`${Math.round(50)}%`}</Typography>
              </Box>
            </Box>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress variant="determinate" value={75} />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  variant="caption"
                  component="div"
                  sx={{ color: 'text.secondary' }}
                >{`${Math.round(75)}%`}</Typography>
              </Box>
            </Box>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress variant="determinate" value={100} />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  variant="caption"
                  component="div"
                  sx={{ color: 'text.secondary' }}
                >{`${Math.round(100)}%`}</Typography>
              </Box>
            </Box>
          </Stack>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="dispatch jobs">
            <SendIcon />
          </IconButton>
          {!expand && (
            <IconButton
              aria-label="configure jobs"
              sx={{ marginLeft: 'auto' }}
              onClick={() => setExpand(true)}
            >
              <ExpandMoreIcon />
            </IconButton>
          )}
          {expand && (
            <IconButton
              aria-label="configure jobs"
              sx={{ marginLeft: 'auto' }}
              onClick={() => setExpand(false)}
            >
              <ExpandLessIcon />
            </IconButton>
          )}
        </CardActions>
        <Collapse in={expand} timeout="auto" unmountOnExit>
          <Divider variant="middle">
            <SettingsIcon color="action" />
          </Divider>
          <CardContent>
            <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
              <Typography variant="body2">BATCH</Typography>
              <Switch aria-label="Are the jobs batched" defaultChecked />
            </Stack>

            <Stack spacing={5} direction="row" sx={{ alignItems: 'center', mb: 1, mr: 1 }}>
              <Typography variant="body2">JOBS</Typography>
              <Slider
                size="small"
                aria-label="Number of jobs to dispatch"
                defaultValue={50}
                valueLabelDisplay="auto"
                shiftStep={10}
                step={10}
                marks
                min={10}
                max={100}
              ></Slider>
            </Stack>
            <Stack spacing={4} direction="row" sx={{ alignItems: 'center', mb: 1, mr: 1 }}>
              <Typography variant="body2">DELAY</Typography>
              <Slider
                size="small"
                aria-label="Max delay of job execution"
                defaultValue={5}
                valueLabelDisplay="auto"
                shiftStep={1}
                step={1}
                marks
                min={1}
                max={10}
              ></Slider>
            </Stack>
            <Divider variant="middle"></Divider>
            <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mt: 3 }}>
              <InfoIcon color="action" />
              <Typography variant="body2">
                The 50 jobs will be batched with max delay of 5 seconds
              </Typography>
            </Stack>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
};
