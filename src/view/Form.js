import React from "react";
import { Box, Button, Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PublishIcon from "@material-ui/icons/Publish";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles((theme) => ({
  
  input: {
    display: "none",
  },
}));
export default function Form() {
  const classes = useStyles();
  const [value, setValue] = React.useState("Enable");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item sm={12}>
          <TextField
            name="Name"
            label="Name"
            variant="outlined"
            fullWidth
            margin="dense"
          />
        </Grid>
        <Grid item sm={12}>
          <TextField
            name="Description"
            label="Description"
            multiline
            minRows={4}
            variant="outlined"
            fullWidth
            margin="dense"
          />
        </Grid>
        <Grid item sm={12}>
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button
              variant="contained"
              color="primary"
              component="span"
              startIcon={<PublishIcon />}
            >
              Upload
            </Button>
          </label>
        </Grid>
        <Grid item sm={8}>
          <TextField
            name="Answer"
            label="Answer"
            variant="outlined"
            fullWidth
            margin="dense"
          />
          <TextField
            name="Answer"
            label="Answer"
            variant="outlined"
            fullWidth
            margin="dense"
          />
        </Grid>
        <Grid item sm={4}>
          <Box  display="flex" justifyContent="center">
            <FormControl component="fieldset">
              <FormLabel component="legend">Active</FormLabel>
              <RadioGroup
                aria-label="Active"
                name="Active1"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel value="Enable" control={<Radio />} />
                <FormControlLabel value="Disable" control={<Radio />} />
              </RadioGroup>
            </FormControl>
          </Box>
        </Grid>
        <Grid item sm={12}>
          <Box display="flex" justifyContent="flex-end">
            <Button color="secondary" variant="contained">
              + Answer
            </Button>
          </Box>
        </Grid>
        <Grid item sm={12}>
          <Button color="primary" variant="contained" fullWidth>
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
