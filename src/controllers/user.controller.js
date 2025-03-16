import { asyncHandler } from "../utils/asyncHandler.js"; // Added `.js`

const registerUser = asyncHandler(async (req, res) => {
  return res.status(200).json({
    message: "chai aur code",
  });
});

export { registerUser };
