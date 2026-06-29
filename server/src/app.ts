import express from "express";
import cors from "cors";
import { authenticate } from "./middleware/auth.middleware";
import authRoutes from "./routes/auth.routes";
import categoryRoutes from "./routes/category.routes";
import subscriptionRoutes from "./routes/subscription.routes";
import dashboardRoutes from "./routes/dashboard.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "🚀 RenewIQ API is running",
  });
});

app.use("/auth", authRoutes);
app.use("/categories", categoryRoutes);
app.use("/subscriptions", subscriptionRoutes);
app.use("/dashboard", dashboardRoutes);

app.get("/profile", authenticate, (req, res) => {
  res.json({
    success: true,
    message: "Protected route accessed",
    userId: req.userId,
  });
});

export default app;