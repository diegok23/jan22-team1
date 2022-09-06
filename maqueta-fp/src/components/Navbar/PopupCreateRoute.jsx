import React, { useEffect, useState } from "react";
import {
  ButtonCreate,
  Input,
  InputDoubleLeft,
  InputDoubleRight,
  PopupNewRoute,
} from "./Navbar.style";
import { Modal, Typography } from "@mui/material";
import { EditButton, TextFieldStyled } from "../Profile/Profile.style";
import { Box } from "@mui/system";
import createRoute from "../../static/createRoute";
import { useNavigate } from "react-router-dom";

const PopupCreateRoute = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const [distance, setDistance] = useState("");
  const [description, setDescription] = useState("");
  let body = "";
  const navigation = useNavigate();
  const [accountStatus, setAccountStatus] = useState(false);
  const refreshPage = () => {navigation(0);}

  const handleCreateRoute = async (e) => {
    e.preventDefault();
    body = await createRoute({
      title,
      url,
      country,
      city,
      type,
      distance,
      description,
    });
    body.isCreated && setAccountStatus(true);
  };

  useEffect(() => {
    
    if (accountStatus) refreshPage("/feed");
  }, [accountStatus, refreshPage]);

  useEffect(() => {
    if (accountStatus) setOpen(false);
  }, [accountStatus, setOpen]);

  return (
    <>
      <ButtonCreate onClick={(e) => setOpen(true)}>
        <Typography variant="p">Create Route</Typography>
      </ButtonCreate>

      <Modal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <PopupNewRoute>
          <Box sx={{ borderBottom: "1px solid #D9D9D9" }}>
            <Typography
              variant="h4"
              color="secondary"
              textAlign="center"
              mt="10px"
              mb="10px"
            >
              Create a route
            </Typography>
          </Box>

          <Box mt="10px" mb="10px">
            <Typography
              variant="p"
              color="primary"
              textAlign="center"
              mt="10px"
              mb="10px"
            >
              Is it your first time sharing a route on{" "}
              <Typography variant="spam" color="secondary">
                CyClick
              </Typography>
              ? Watch a tutorial on how to create your first route{" "}
              <Typography variant="spam" color="secondary">
                here
              </Typography>
            </Typography>
          </Box>

          <Box mt="10px" mb="10px">
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              id="standard-read-only-input"
              label="Title"
              variant="standard"
              color="secondary"
              focused
            />

            <Input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
              id="standard-read-only-input"
              label="URL"
              variant="standard"
              color="secondary"
              focused
            />
          </Box>

          <Box mt="10px" mb="40px">
            <InputDoubleLeft
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
              id="standard-read-only-input"
              label="Country"
              variant="standard"
              color="secondary"
              focused
            />

            <InputDoubleRight
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              id="standard-read-only-input"
              label="City"
              variant="standard"
              color="secondary"
              focused
            />

            <InputDoubleRight
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
              id="standard-read-only-input"
              label="Type"
              variant="standard"
              color="secondary"
              focused
            />

            <InputDoubleRight
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              required
              id="standard-read-only-input"
              label="Distance"
              variant="standard"
              color="secondary"
              focused
            />
          </Box>

          <Box>
            <TextFieldStyled
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={6}
              defaultValue=""
              variant="filled"
              color="white"
            />
          </Box>

          <Box display="flex" justifyContent="center">
            <EditButton onClick={handleCreateRoute}>
              <Typography variant="h6" color="white.main">
                Create
              </Typography>
            </EditButton>
          </Box>
        </PopupNewRoute>
      </Modal>
    </>
  );
};

export default PopupCreateRoute;
