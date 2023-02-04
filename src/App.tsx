import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Checkbox, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PublicIcon from "@mui/icons-material/Public";
import TuneIcon from "@mui/icons-material/Tune";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import BuildIcon from "@mui/icons-material/Build";

function App() {
	return (
		<div>
			<div>
				<Tooltip title="Delete">
					<IconButton style={{ border: "1px solid black", margin: 5 }}>
						<DeleteIcon />
					</IconButton>
				</Tooltip>
				<Tooltip title="Threshold Management">
					<IconButton style={{ border: "1px solid black", margin: 5 }}>
						<PublicIcon />
					</IconButton>
				</Tooltip>
				<Tooltip title="Geofences">
					<IconButton style={{ border: "1px solid black", margin: 5 }}>
						<TuneIcon />
					</IconButton>
				</Tooltip>
				<Tooltip title="Whatever">
					<IconButton style={{ border: "1px solid black", margin: 5 }}>
						<AccessibilityIcon />
					</IconButton>
				</Tooltip>
			</div>
			<div style={{ width: "40%" }}>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography>Port Engine</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<div>
							<Typography>Fuel Rate</Typography>
							<TextField id="outlined-basic" label="Min" variant="outlined" />
							<TextField id="outlined-basic" label="Max" variant="outlined" />
							<Checkbox />
						</div>
						<div>
							<Typography>RPM</Typography>
							<TextField id="outlined-basic" label="Min" variant="outlined" />
							<TextField id="outlined-basic" label="Max" variant="outlined" />
							<Checkbox />
						</div>
						<div>
							<Typography>Engine Hours</Typography>
							<TextField id="outlined-basic" label="Min" variant="outlined" />
							<TextField id="outlined-basic" label="Max" variant="outlined" />
							<Checkbox />
						</div>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2a-content"
						id="panel2a-header"
					>
						<Typography>Starboard Engine</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<div>
							<Typography>Fuel Rate</Typography>
							<TextField id="outlined-basic" label="Min" variant="outlined" />
							<TextField id="outlined-basic" label="Max" variant="outlined" />
							<Checkbox />
						</div>
						<div>
							<Typography>RPM</Typography>
							<TextField id="outlined-basic" label="Min" variant="outlined" />
							<TextField id="outlined-basic" label="Max" variant="outlined" />
							<Checkbox />
						</div>
						<div>
							<Typography>Engine Hours</Typography>
							<TextField id="outlined-basic" label="Min" variant="outlined" />
							<TextField id="outlined-basic" label="Max" variant="outlined" />
							<Checkbox />
						</div>
					</AccordionDetails>
				</Accordion>
			</div>
			<div>
				<Card sx={{ maxWidth: 345 }}>
					<CardMedia
						sx={{ height: 140 }}
						image="https://images.pexels.com/photos/296278/pexels-photo-296278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						title="green iguana"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							AST Victory
						</Typography>
						<Typography variant="body2" color="text.secondary">
							1 Urgent notification
						</Typography>
					</CardContent>
					<CardActions>
						<IconButton>
							<TuneIcon />
						</IconButton>
						<IconButton>
							<BuildIcon />
						</IconButton>
					</CardActions>
				</Card>
			</div>
		</div>
	);
}

export default App;
