import { Typography } from '@mui/material'
import * as React from 'react'

const AboutPage = () => {
  return (
    <>
      <Typography className="main-header">About</Typography>
      <Typography className="paragraph">
        Texas 42, or 42, is a table-top game played with a set of double-six dominoes.
        Two teams of two people each face off, with the goal of winning 7 marks. The first team to reach 7 marks wins
        the game.

        Texas 42 was reported invented in Garner, Texas over 100 years ago. It has since become a popular game across
        the entire state, and even the nation.
        The game is especially beloved by the student body at Texas A&M, being the game of choice of the Singing Cadets,
        Student Bonfire, and the Corps of Cadets.
        However, all these groups play the game by their own unique rules. Indeed, 42 has many different variants that
        can make learning how to play the game intimidating for newcomers.
        This guide was created with the goal of teaching beginners the basics, as well as a reference for seasoned
        players who want to learn the different variants.

        Feel free to jump between sections and refer to the Terminology section as needed. The rules may be difficult to
        grasp at first, but with a little practice you will discover an in-depth game of counting, strategy, risk, and
        even bluffing.
      </Typography>
    </>
  )
}

export default AboutPage
