import { Box, Typography } from '@mui/material'
import * as React from 'react'
import NationalTournamentImg from '../../../images/national-tournament-hallettsville.jpg'

const AboutPage = () => {
  return (
    <>
      <Typography className="main-header">About</Typography>
      <Typography className="paragraph">
        Texas 42, or 42, is a table-top game played with a set of double-six dominoes.
        Two teams of two people each face off with the goal of winning 7 marks. The first team to reach 7 marks wins
        the game.

        <br/><br/>

        Texas 42 was invented in Garner, Texas over 100 years ago. It has since become a popular game across
        the entire state, and even the nation.
        The game is especially beloved by the student body at Texas A&M, being the game of choice of the Singing Cadets,
        Student Bonfire, and the Corps of Cadets.

        <br/><br/>

        All these groups play the game by their own unique rules. 42 has many different variants and rulesets that
        can make learning the game intimidating for newcomers.

        <div className="rules-image-container">
          <Box
            className="rules-image"
            component="img"
            src={NationalTournamentImg}
            alt="National 42 Tournament in Hallettsville, Texas"
          />
          <Typography className="rules-image-description">
            Annual National 42 Tournament in Hallettsville, Texas
          </Typography>
        </div>

        Tournaments for this game are held in towns across Texas, with the largest being the annual National 42
        Tournament in Hallettsville, Texas. It is held every year on the first Saturday of March.
      </Typography>
    </>
  )
}

export default AboutPage
