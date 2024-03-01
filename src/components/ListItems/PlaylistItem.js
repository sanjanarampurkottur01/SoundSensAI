import { Box, Grid } from "@mui/material";
import "./PlaylistItem.css";
import ArrowIcon from "../static/arrow-url.svg";

function PlaylistItem() {
	return (
		<div>
			<Box component="section" className="Playlist-Item-Box" sx={{ width: '20%' }}>
				<Grid container spacing={3}>
					<Grid item xs={2}>
					<img className="albumArt" src="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228" />
					</Grid>
					<Grid item xs={8}>
						<p><b>Playlist Name</b></p>
					</Grid>
					<Grid item xs={2}>
						<img src={ArrowIcon} sx={{ width: '10px' }}/>
					</Grid>
				</Grid>
			</Box>
		</div>
	)
}

export default PlaylistItem;