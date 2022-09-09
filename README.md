# othelloLC

# How I ran the Game
To run the game, I used - run `java -jar othello.jar --p1-type random --p2-type remote --wait-for-ui`\
To run the remote player, I used - run `node client.js 1338 localhost`

## Usage

To run the game, you'll need a recent Java VM and the JAR file mentioned above. Invoke the game from the command line:

    $ java -jar othello.jar [args]

## Options

You can specify that the server should invoke your player, use a "robot" player with a predetermined set of moves, or use a random player for one or both players.

The player can be one of three types:
remote - the game will listen for a player to connect to the server
random - the game will make a random valid move for the player
robot - the game use moves specified in the `--p1-moves` or `--p2-moves` argument

You'll most likely want to run with your client as a remote player, and a random player for the opponent.

The game will log moves to the console and run a webserver on port 8080 for a UI.
Use the `--ui-port` to specify a different UI port.
Pass the `--wait-for-ui` option in order to have the server wait for a UI connection before starting the game.

The game will by default time out if a player has not responeded within 15 seconds
You can change this with the `--max-turn-time arg` (`--max-turn-time 20000` for 20 seconds).

Usage:
```
java -jar othello.jar
java -jar othello.jar --p1-type remote --p2-type random --wait-for-ui
```

Options:
```
      --p1-type TYPE          :remote     Player one's type - remote, random, or robot
      --p2-type TYPE          :remote     Player two's type - remote, random, or robot
      --p1-name NAME          Player One  Player one's team name
      --p2-name NAME          Player Two  Player two's team name
      --p1-moves MOVES        []          Moves for a P1 robot player
      --p2-moves MOVES        []          Moves for a P2 robot player
      --p1-port PORT          1337        Port number for the P1 client
      --p2-port PORT          1338        Port number for the P2 client
      --ui-port PORT          8080        Port number for UI clients
  -w, --wait-for-ui                       Wait for a UI client to connect before starting game
  -m, --min-turn-time MILLIS  1000        Minimum amount of time to wait between turns.
  -x, --max-turn-time MILLIS  15000       Maximum amount of time to allow an AI for a turn.
  -h, --help
```